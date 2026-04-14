export async function POST(req: Request) {
  try {
    const { title, content, email } = await req.json();

    if (!title?.trim() || !content?.trim() || !email?.trim()) {
      return Response.json(
        { error: "Title, content, and email are required." },
        { status: 400 },
      );
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: "Urovo-Tech Contact",
          email: "no-reply@patrick-shenzhen.org",
        },
        to: [
          {
            email: "patrick@urovo.com",
            name: "Patrick Xu",
          },
        ],
        subject: `[Website Contact] ${title}`,
        htmlContent: `
          <h2>New Contact Message</h2>
          <p><strong>From Email:</strong> ${email}</p>
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Content:</strong></p>
          <div style="white-space:pre-wrap;font-family:Arial,sans-serif;">${content}</div>
        `,
        replyTo: {
          email,
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return Response.json(
        { error: data?.message || "Failed to send email." },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error ? error.message : "Unexpected server error.",
      },
      { status: 500 },
    );
  }
}
