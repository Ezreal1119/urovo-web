"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export function NavbarContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit() {
    if (!title.trim() || !content.trim() || !email.trim()) return;

    setSubmitted(true);

    setTimeout(() => {
      setTitle("");
      setContent("");
      setEmail("");
      setSubmitted(false);
      onOpenChange(false);
    }, 1200);
  }

  const isDisabled = !title.trim() || !content.trim() || !email.trim();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          !w-[88vw] !max-w-[1180px]
          h-[85vh] max-h-[85vh]
          p-0
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-[rgba(10,10,14,0.92)]
          text-foreground
          shadow-[0_24px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        <DialogTitle className="sr-only">Contact Me</DialogTitle>
        <DialogDescription className="sr-only">
          Send a message with title, content, and email.
        </DialogDescription>

        <div className="grid h-full min-h-0 grid-cols-[0.82fr_1.18fr]">
          {/* Left panel */}
          <div className="grid min-h-0 grid-rows-[1fr_auto] border-r border-white/10 bg-white/[0.02]">
            {/* Scrollable content */}
            <div className="min-h-0 overflow-y-auto px-7 py-7">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    Contact Me
                  </h3>

                  <p className="max-w-sm text-sm leading-7 text-foreground/55">
                    Send me a message for project discussion, business
                    communication, or technical collaboration.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-foreground/65">
                  <div className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/35">
                    Direct Contact
                  </div>

                  <div className="mt-3 space-y-2">
                    <div>
                      <div className="text-xs text-foreground/35">Email</div>
                      <div className="text-sm text-white">
                        patrick@urovo.com
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-foreground/35">WhatsApp</div>
                      <div className="text-sm text-white">+86 18807737955</div>
                    </div>

                    <div>
                      <div className="text-xs text-foreground/35">
                        Phone / WeChat
                      </div>
                      <div className="text-sm text-white">18807737955</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] px-4 py-4 text-sm leading-6 text-foreground/70">
                  <div className="text-xs font-medium uppercase tracking-[0.14em] text-blue-300">
                    Note
                  </div>
                  <p className="mt-2">
                    Please leave a clear title and enough project context so I
                    can reply efficiently.
                  </p>
                </div>

                {submitted && (
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-3 text-sm text-emerald-300">
                    Submitted successfully.
                  </div>
                )}
              </div>
            </div>

            {/* Fixed footer */}
            <div className="shrink-0 border-t border-white/10 bg-[rgba(10,10,14,0.92)] px-7 py-5">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="h-11 rounded-xl border-white/10 bg-white/[0.03] px-5 hover:bg-white/[0.06]"
                >
                  Cancel
                </Button>

                <Button
                  onClick={handleSubmit}
                  disabled={isDisabled}
                  className="h-11 rounded-xl px-5"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="min-h-0 overflow-y-auto px-7 py-7">
            <div className="space-y-5">
              <div>
                <div className="text-base font-medium text-blue-300">
                  Message Form
                </div>
                <p className="mt-1 text-sm text-foreground/45">
                  Fill in the information below and send your message.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/75">
                    Title
                  </label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter the title"
                    className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-foreground placeholder:text-foreground/35"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/75">
                    Content
                  </label>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter your message"
                    className="min-h-[260px] rounded-2xl border-white/10 bg-white/[0.04] text-foreground placeholder:text-foreground/35"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/75">
                    Email
                  </label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-foreground placeholder:text-foreground/35"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
