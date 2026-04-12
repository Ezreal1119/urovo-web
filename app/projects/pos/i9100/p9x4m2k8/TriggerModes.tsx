import { Playfair_Display } from "next/font/google";
import ZoomableTextLink from "@/components/ui/ZoomableTextLink";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export const TriggerZero = () => {
  return (
    <SimpleTriggerCard
      title="0x72000000"
      titleColor="#ef4444"
      description="Error Code not shown because of low version of Firmware(OS/SE)"
      message={
        <ul>
          <li>
            • Go to{" "}
            <ZoomableTextLink
              href="/products/pos/i9100/safe_mode/wifi_settings_page.png"
              imageAlt="WiFi Settings"
            >
              WiFI Page
            </ZoomableTextLink>
            ; Then press Volume buttons "+ - + - + + - -" in order; Select{" "}
            <ZoomableTextLink
              href="/products/pos/i9100/safe_mode/factory_menu_security_chip.png"
              imageAlt="Security Chip test"
            >
              "Security Chip test(*#3250)"
            </ZoomableTextLink>
            ; Select "queryTriggeredInfo" in the "Function" section; Enter "90"
            in "Input data"; Then you can see the{" "}
            <ZoomableTextLink
              href="/products/pos/i9100/safe_mode/check_past_trigger_code.png"
              imageAlt="Past Error Code"
            >
              Past Error Code
            </ZoomableTextLink>
            .
          </li>
          <li>
            • You may upgrade the Firmware(OS/SE) to see the Current Error Code
            directly. Check Firmware Upgrade Instruction{" "}
            <Link
              href="/projects/pos/i9100/p9x4m2k8#upgrade"
              className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              HERE
            </Link>{" "}
          </li>
        </ul>
      }
    />
  );
};

export const TriggerOne = () => {
  return (
    <CodeBlock
      title="0x72000001"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 1."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                3. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  <strong>MagHead FPC</strong>
                </ZoomableTextLink>{" "}
                is connected well to the mainboard, and that the Connector has
                no visible damage.
              </li>

              <li>
                4. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  <strong>MagHead</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                5. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. Mag Head
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The MagHead FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The MagHead FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The MagHead FPC is damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right zebra strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The mainboard is damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                .
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerTwo = () => {
  return (
    <CodeBlock
      title="0x72000002"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 2."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  <strong>LCD FPC</strong>
                </ZoomableTextLink>{" "}
                (the larger one of the screen FPCs) is connected well to the
                mainboard, and that the connector has no visible damage.
              </li>

              <li>
                5. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. LCD
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The LCD FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The LCD FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The LCD FPC is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_1.png"
                  imageAlt="LCD FPC PIN_7 and PIN_24"
                >
                  PIN_7 & PIN_24
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_2.png"
                  imageAlt="LCD FPC normal resistance measurement"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of PIN_7, PIN_24) and
                GND of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right Zebra Strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_1.png"
                  imageAlt="RTC board PIN_2 Right"
                >
                  PIN_2(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_2.png"
                  imageAlt="RTC board Outer PIN"
                >
                  Outer_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_3.png"
                  imageAlt="RTC board normal resistance 0 ohm"
                >
                  0 ohm
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_4.png"
                  imageAlt="RTC board PIN_4"
                >
                  PIN_4(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_5.png"
                  imageAlt="RTC board Inner PIN"
                >
                  Inner_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_6.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerThree = () => {
  return (
    <CodeBlock
      title="0x72000003"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 1 & Trigger 2."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  <strong>LCD FPC</strong>
                </ZoomableTextLink>{" "}
                (the larger one of the screen FPCs) is connected well to the
                mainboard, and that the connector has no visible damage.
              </li>

              <li>
                5. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  <strong>MagHead FPC</strong>
                </ZoomableTextLink>{" "}
                is connected well to the mainboard, and that the Connector has
                no visible damage.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  <strong>MagHead</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                8. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                9. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. Mag Head
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The MagHead FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The MagHead FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The MagHead FPC is damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. LCD
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The LCD FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The LCD FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The LCD FPC is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_1.png"
                  imageAlt="LCD FPC PIN_7 and PIN_24"
                >
                  PIN_7 & PIN_24
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_2.png"
                  imageAlt="LCD FPC normal resistance measurement"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of PIN_7, PIN_24) and
                GND of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right Zebra Strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_1.png"
                  imageAlt="RTC board Upper PIN_2 and PIN_4"
                >
                  PIN_2(Upper) & PIN_4(Upper)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                and (any of Upper PIN_1, PIN_3, PIN_5) of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_1.png"
                  imageAlt="RTC board PIN_2 Right"
                >
                  PIN_2(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_2.png"
                  imageAlt="RTC board Outer PIN"
                >
                  Outer_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_3.png"
                  imageAlt="RTC board normal resistance 0 ohm"
                >
                  0 ohm
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_4.png"
                  imageAlt="RTC board PIN_4"
                >
                  PIN_4(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_5.png"
                  imageAlt="RTC board Inner PIN"
                >
                  Inner_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_6.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              4. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerFour = () => {
  return (
    <CodeBlock
      title="0x72000004"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 3."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                5. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_9"
                >
                  PIN_9
                </ZoomableTextLink>{" "}
                of the TP FPC and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_2"
                >
                  PIN_2
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_measure_result.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_upper_zebra.png"
                  imageAlt="RTC board"
                >
                  Upper Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_1.png"
                  imageAlt="RTC board Upper PIN_2 and PIN_4"
                >
                  PIN_2(Upper) & PIN_4(Upper)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                and (any of Upper PIN_1, PIN_3, PIN_5) of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                of the RTC board and any Right/Lower PIN of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerFive = () => {
  return (
    <CodeBlock
      title="0x72000005"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 1 & Trigger 4."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                5. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  <strong>MagHead FPC</strong>
                </ZoomableTextLink>{" "}
                is connected well to the mainboard, and that the Connector has
                no visible damage.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  <strong>MagHead</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                8. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                9. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. Mag Head
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The MagHead FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The MagHead FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The MagHead FPC is damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_7"
                >
                  PIN_7
                </ZoomableTextLink>{" "}
                of the TP FPC (the smaller one of the screen FPCs that is below
                LCD FPC) and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_3"
                >
                  PIN_3
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_measure.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right zebra strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_zebra_strips.png"
                  imageAlt="Upper and Lower Zebra Strips"
                >
                  Upper/Lower Zebra Strips
                </ZoomableTextLink>{" "}
                of the RTC board are missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_one_rtc_board_1.png"
                  imageAlt="RTC board PIN_1 and PIN_3"
                >
                  PIN_1(Right) and PIN_3(Right)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_one_rtc_measure_1.png"
                  imageAlt="RTC board normal resistance measurement"
                >
                  15 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of Right PIN_1, PIN_3)
                and (any of Right PIN_2, PIN_4, PIN_5) of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_1.png"
                  imageAlt="RTC board PIN_3 Upper and PIN_1 Lower"
                >
                  PIN_3(Upper) and PIN_1(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_3.png"
                  imageAlt="RTC board PIN_3 Lower and PIN_5 Lower"
                >
                  PIN_3(Lower) and PIN_5(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_4.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              4. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerSix = () => {
  return (
    <CodeBlock
      title="0x72000006"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 2 & Trigger 4."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  <strong>LCD FPC</strong>
                </ZoomableTextLink>{" "}
                (the larger one of the screen FPCs) is connected well to the
                mainboard, and that the connector has no visible damage.
              </li>

              <li>
                5. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                8. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. LCD
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The LCD FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The LCD FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The LCD FPC is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_1.png"
                  imageAlt="LCD FPC PIN_7 and PIN_24"
                >
                  PIN_7 & PIN_24
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_2.png"
                  imageAlt="LCD FPC normal resistance measurement"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of PIN_7, PIN_24) and
                GND of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_9"
                >
                  PIN_9
                </ZoomableTextLink>{" "}
                of the TP FPC and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_2"
                >
                  PIN_2
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_measure_result.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right Zebra Strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_upper_zebra.png"
                  imageAlt="RTC board"
                >
                  Upper Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_1.png"
                  imageAlt="RTC board PIN_2 Right"
                >
                  PIN_2(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_2.png"
                  imageAlt="RTC board Outer PIN"
                >
                  Outer_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_3.png"
                  imageAlt="RTC board normal resistance 0 ohm"
                >
                  0 ohm
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_4.png"
                  imageAlt="RTC board PIN_4"
                >
                  PIN_4(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_5.png"
                  imageAlt="RTC board Inner PIN"
                >
                  Inner_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_6.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_1.png"
                  imageAlt="RTC board Upper PIN_2 and PIN_4"
                >
                  PIN_2(Upper) & PIN_4(Upper)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                and (any of Upper PIN_1, PIN_3, PIN_5) of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                of the RTC board and any Right/Lower PIN of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              4. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerSeven = () => {
  return (
    <CodeBlock
      title="0x72000007"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 1 & Trigger 2 & Trigger 3."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  <strong>LCD FPC</strong>
                </ZoomableTextLink>{" "}
                (the larger one of the screen FPCs) is connected well to the
                mainboard, and that the connector has no visible damage.
              </li>

              <li>
                5. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  <strong>MagHead FPC</strong>
                </ZoomableTextLink>{" "}
                is connected well to the mainboard, and that the Connector has
                no visible damage.
              </li>

              <li>
                6. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  <strong>MagHead</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                8. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                9. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                10. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. Mag Head
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The MagHead FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The MagHead FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The MagHead FPC is damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. LCD
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The LCD FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The LCD FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The LCD FPC is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_1.png"
                  imageAlt="LCD FPC PIN_7 and PIN_24"
                >
                  PIN_7 & PIN_24
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_2.png"
                  imageAlt="LCD FPC normal resistance measurement"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of PIN_7, PIN_24) and
                GND of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_9"
                >
                  PIN_9
                </ZoomableTextLink>{" "}
                of the TP FPC and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_2"
                >
                  PIN_2
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_measure_result.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              4. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right Zebra Strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_upper_zebra.png"
                  imageAlt="RTC board"
                >
                  Upper Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_1.png"
                  imageAlt="RTC board PIN_2 Right"
                >
                  PIN_2(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_2.png"
                  imageAlt="RTC board Outer PIN"
                >
                  Outer_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_3.png"
                  imageAlt="RTC board normal resistance 0 ohm"
                >
                  0 ohm
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_4.png"
                  imageAlt="RTC board PIN_4"
                >
                  PIN_4(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_5.png"
                  imageAlt="RTC board Inner PIN"
                >
                  Inner_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_6.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_1.png"
                  imageAlt="RTC board Upper PIN_2 and PIN_4"
                >
                  PIN_2(Upper) & PIN_4(Upper)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                and (any of Upper PIN_1, PIN_3, PIN_5) of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                of the RTC board and any Right/Lower PIN of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              5. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerEight = () => {
  return (
    <CodeBlock
      title="0x72000008"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 4."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                5. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_7"
                >
                  PIN_7
                </ZoomableTextLink>{" "}
                of the TP FPC (the smaller one of the screen FPCs that is below
                LCD FPC) and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_3"
                >
                  PIN_3
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_measure.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_zebra_strips.png"
                  imageAlt="Upper and Lower Zebra Strips"
                >
                  Upper/Lower Zebra Strips
                </ZoomableTextLink>{" "}
                of the RTC board are missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_1.png"
                  imageAlt="RTC board PIN_3 Upper and PIN_1 Lower"
                >
                  PIN_3(Upper) and PIN_1(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_3.png"
                  imageAlt="RTC board PIN_3 Lower and PIN_5 Lower"
                >
                  PIN_3(Lower) and PIN_5(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_4.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerNine = () => {
  return (
    <CodeBlock
      title="0x72000009"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 1 & Trigger 4."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  <strong>MagHead FPC</strong>
                </ZoomableTextLink>{" "}
                is connected well to the mainboard, and that the Connector has
                no visible damage.
              </li>

              <li>
                5. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  <strong>MagHead</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                8. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                9. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. Mag Head
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The MagHead FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The MagHead FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The MagHead FPC is damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_7"
                >
                  PIN_7
                </ZoomableTextLink>{" "}
                of the TP FPC (the smaller one of the screen FPCs that is below
                LCD FPC) and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_3"
                >
                  PIN_3
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_measure.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right zebra strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_zebra_strips.png"
                  imageAlt="Upper and Lower Zebra Strips"
                >
                  Upper/Lower Zebra Strips
                </ZoomableTextLink>{" "}
                of the RTC board are missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_1.png"
                  imageAlt="RTC board PIN_3 Upper and PIN_1 Lower"
                >
                  PIN_3(Upper) and PIN_1(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_3.png"
                  imageAlt="RTC board PIN_3 Lower and PIN_5 Lower"
                >
                  PIN_3(Lower) and PIN_5(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_4.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              4. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerTen = () => {
  return (
    <CodeBlock
      title="0x7200000A"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 2 & Trigger 4."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  <strong>LCD FPC</strong>
                </ZoomableTextLink>{" "}
                (the larger one of the screen FPCs) is connected well to the
                mainboard, and that the connector has no visible damage.
              </li>

              <li>
                5. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                8. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. LCD
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The LCD FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The LCD FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The LCD FPC is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_1.png"
                  imageAlt="LCD FPC PIN_7 and PIN_24"
                >
                  PIN_7 & PIN_24
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_2.png"
                  imageAlt="LCD FPC normal resistance measurement"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of PIN_7, PIN_24) and
                GND of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_7"
                >
                  PIN_7
                </ZoomableTextLink>{" "}
                of the TP FPC (the smaller one of the screen FPCs that is below
                LCD FPC) and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_3"
                >
                  PIN_3
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_measure.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right Zebra Strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_zebra_strips.png"
                  imageAlt="Upper and Lower Zebra Strips"
                >
                  Upper/Lower Zebra Strips
                </ZoomableTextLink>{" "}
                of the RTC board are missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_1.png"
                  imageAlt="RTC board PIN_2 Right"
                >
                  PIN_2(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_2.png"
                  imageAlt="RTC board Outer PIN"
                >
                  Outer_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_3.png"
                  imageAlt="RTC board normal resistance 0 ohm"
                >
                  0 ohm
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_4.png"
                  imageAlt="RTC board PIN_4"
                >
                  PIN_4(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_5.png"
                  imageAlt="RTC board Inner PIN"
                >
                  Inner_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_6.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_1.png"
                  imageAlt="RTC board PIN_3 Upper and PIN_1 Lower"
                >
                  PIN_3(Upper) and PIN_1(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_3.png"
                  imageAlt="RTC board PIN_3 Lower and PIN_5 Lower"
                >
                  PIN_3(Lower) and PIN_5(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_4.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              4. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerEleven = () => {
  return (
    <CodeBlock
      title="0x7200000B"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 1 & Trigger 2 & Trigger 4."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  <strong>LCD FPC</strong>
                </ZoomableTextLink>{" "}
                (the larger one of the screen FPCs) is connected well to the
                mainboard, and that the connector has no visible damage.
              </li>

              <li>
                5. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  <strong>MagHead FPC</strong>
                </ZoomableTextLink>{" "}
                is connected well to the mainboard, and that the Connector has
                no visible damage.
              </li>

              <li>
                6. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  <strong>MagHead</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                8. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                9. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                10. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. Mag Head
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The MagHead FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The MagHead FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The MagHead FPC is damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. LCD
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The LCD FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The LCD FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The LCD FPC is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_1.png"
                  imageAlt="LCD FPC PIN_7 and PIN_24"
                >
                  PIN_7 & PIN_24
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_2.png"
                  imageAlt="LCD FPC normal resistance measurement"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of PIN_7, PIN_24) and
                GND of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_7"
                >
                  PIN_7
                </ZoomableTextLink>{" "}
                of the TP FPC (the smaller one of the screen FPCs that is below
                LCD FPC) and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_3"
                >
                  PIN_3
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_measure.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              4. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right Zebra Strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_zebra_strips.png"
                  imageAlt="Upper and Lower Zebra Strips"
                >
                  Upper/Lower Zebra Strips
                </ZoomableTextLink>{" "}
                of the RTC board are missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_1.png"
                  imageAlt="RTC board PIN_2 Right"
                >
                  PIN_2(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_2.png"
                  imageAlt="RTC board Outer PIN"
                >
                  Outer_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_3.png"
                  imageAlt="RTC board normal resistance 0 ohm"
                >
                  0 ohm
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_4.png"
                  imageAlt="RTC board PIN_4"
                >
                  PIN_4(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_5.png"
                  imageAlt="RTC board Inner PIN"
                >
                  Inner_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_6.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_1.png"
                  imageAlt="RTC board PIN_3 Upper and PIN_1 Lower"
                >
                  PIN_3(Upper) and PIN_1(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_3.png"
                  imageAlt="RTC board PIN_3 Lower and PIN_5 Lower"
                >
                  PIN_3(Lower) and PIN_5(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_4.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              5. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerTwelve = () => {
  return (
    <CodeBlock
      title="0x7200000C"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 3 & Trigger 4."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                5. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_9"
                >
                  PIN_9
                </ZoomableTextLink>{" "}
                of the TP FPC and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_2"
                >
                  PIN_2
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_measure_result.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_7"
                >
                  PIN_7
                </ZoomableTextLink>{" "}
                of the TP FPC (the smaller one of the screen FPCs that is below
                LCD FPC) and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_3"
                >
                  PIN_3
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_measure.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_zebra_strips.png"
                  imageAlt="Upper and Lower Zebra Strips"
                >
                  Upper/Lower Zebra Strips
                </ZoomableTextLink>{" "}
                of the RTC board are missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_1.png"
                  imageAlt="RTC board Upper PIN_2 and PIN_4"
                >
                  PIN_2(Upper) & PIN_4(Upper)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                and (any of Upper PIN_1, PIN_3, PIN_5) of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                of the RTC board and any Right/Lower PIN of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_1.png"
                  imageAlt="RTC board PIN_3 Upper and PIN_1 Lower"
                >
                  PIN_3(Upper) and PIN_1(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_3.png"
                  imageAlt="RTC board PIN_3 Lower and PIN_5 Lower"
                >
                  PIN_3(Lower) and PIN_5(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_4.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerThirteen = () => {
  return (
    <CodeBlock
      title="0x7200000D"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 1 & Trigger 3 & Trigger 4."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  <strong>MagHead FPC</strong>
                </ZoomableTextLink>{" "}
                is connected well to the mainboard, and that the Connector has
                no visible damage.
              </li>

              <li>
                5. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  <strong>MagHead</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                8. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                9. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. Mag Head
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The MagHead FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The MagHead FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The MagHead FPC is damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_9"
                >
                  PIN_9
                </ZoomableTextLink>{" "}
                of the TP FPC and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_2"
                >
                  PIN_2
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_measure_result.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_7"
                >
                  PIN_7
                </ZoomableTextLink>{" "}
                of the TP FPC (the smaller one of the screen FPCs that is below
                LCD FPC) and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_3"
                >
                  PIN_3
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_measure.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right zebra strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_zebra_strips.png"
                  imageAlt="Upper and Lower Zebra Strips"
                >
                  Upper/Lower Zebra Strips
                </ZoomableTextLink>{" "}
                of the RTC board are missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_1.png"
                  imageAlt="RTC board Upper PIN_2 and PIN_4"
                >
                  PIN_2(Upper) & PIN_4(Upper)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                and (any of Upper PIN_1, PIN_3, PIN_5) of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                of the RTC board and any Right/Lower PIN of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_1.png"
                  imageAlt="RTC board PIN_3 Upper and PIN_1 Lower"
                >
                  PIN_3(Upper) and PIN_1(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_3.png"
                  imageAlt="RTC board PIN_3 Lower and PIN_5 Lower"
                >
                  PIN_3(Lower) and PIN_5(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_4.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              4. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerFourteen = () => {
  return (
    <CodeBlock
      title="0x7200000E"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 2 & Trigger 3 & Trigger 4."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  <strong>LCD FPC</strong>
                </ZoomableTextLink>{" "}
                (the larger one of the screen FPCs) is connected well to the
                mainboard, and that the connector has no visible damage.
              </li>

              <li>
                5. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                6. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                8. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. LCD
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The LCD FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The LCD FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The LCD FPC is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_1.png"
                  imageAlt="LCD FPC PIN_7 and PIN_24"
                >
                  PIN_7 & PIN_24
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_2.png"
                  imageAlt="LCD FPC normal resistance measurement"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of PIN_7, PIN_24) and
                GND of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_9"
                >
                  PIN_9
                </ZoomableTextLink>{" "}
                of the TP FPC and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_2"
                >
                  PIN_2
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_measure_result.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_7"
                >
                  PIN_7
                </ZoomableTextLink>{" "}
                of the TP FPC (the smaller one of the screen FPCs that is below
                LCD FPC) and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_3"
                >
                  PIN_3
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_measure.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right Zebra Strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_zebra_strips.png"
                  imageAlt="Upper and Lower Zebra Strips"
                >
                  Upper/Lower Zebra Strips
                </ZoomableTextLink>{" "}
                of the RTC board are missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_1.png"
                  imageAlt="RTC board PIN_2 Right"
                >
                  PIN_2(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_2.png"
                  imageAlt="RTC board Outer PIN"
                >
                  Outer_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_3.png"
                  imageAlt="RTC board normal resistance 0 ohm"
                >
                  0 ohm
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_4.png"
                  imageAlt="RTC board PIN_4"
                >
                  PIN_4(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_5.png"
                  imageAlt="RTC board Inner PIN"
                >
                  Inner_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_6.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_1.png"
                  imageAlt="RTC board Upper PIN_2 and PIN_4"
                >
                  PIN_2(Upper) & PIN_4(Upper)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                and (any of Upper PIN_1, PIN_3, PIN_5) of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                of the RTC board and any Right/Lower PIN of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_1.png"
                  imageAlt="RTC board PIN_3 Upper and PIN_1 Lower"
                >
                  PIN_3(Upper) and PIN_1(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_3.png"
                  imageAlt="RTC board PIN_3 Lower and PIN_5 Lower"
                >
                  PIN_3(Lower) and PIN_5(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_4.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              4. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const TriggerFifteen = () => {
  return (
    <CodeBlock
      title="0x7200000F"
      titleStyle={{ color: "#ef4444" }}
      description="You need to fix the problem of Trigger 1 & Trigger 2 & Trigger 3 & Trigger 4."
    >
      <div className="space-y-8">
        <CodeBlock title="Quick Fix Guide" description="">
          <div className="space-y-5 text-sm leading-7 text-foreground/72">
            <ol className="space-y-3">
              <li>
                1. Make sure the terminal is assembled tightly enough, with no
                visible gap between the screen case and the back case.
              </li>

              <li>
                2. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/carbon_particles.png"
                  imageAlt="Carbon Particles"
                >
                  <strong>Carbon Particles</strong>
                </ZoomableTextLink>{" "}
                on the back case are properly in place and not visibly damaged.
              </li>

              <li>
                3. Make sure all three{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png"
                  imageAlt="RTC board all zebra strips"
                >
                  <strong>Zebra Strips</strong>
                </ZoomableTextLink>{" "}
                under the RTC board are properly in place and not visibly
                damaged.
              </li>

              <li>
                4. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  <strong>LCD FPC</strong>
                </ZoomableTextLink>{" "}
                (the larger one of the screen FPCs) is connected well to the
                mainboard, and that the connector has no visible damage.
              </li>

              <li>
                5. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  <strong>MagHead FPC</strong>
                </ZoomableTextLink>{" "}
                is connected well to the mainboard, and that the Connector has
                no visible damage.
              </li>

              <li>
                6. Make sure the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  <strong>Zebra Strip</strong>
                </ZoomableTextLink>{" "}
                on the screen case is properly in place and not visibly damaged.
              </li>

              <li>
                7. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  <strong>MagHead</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                8. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_coin.png"
                  imageAlt="Small RTC board"
                >
                  <strong>Small RTC board</strong>
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board bracket"
                >
                  <strong>Bracket</strong>
                </ZoomableTextLink>
                ) and check again.
              </li>

              <li>
                9. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  <strong>Screen Case</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>

              <li>
                10. <strong>ONLY</strong> replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  <strong>Mainboard</strong>
                </ZoomableTextLink>{" "}
                and check again.
              </li>
            </ol>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-4 text-sm leading-7 text-foreground/75">
              <p className="font-medium text-amber-300">Important Note</p>
              <p className="mt-2">
                Please <strong>ONLY</strong> replace <strong>ONE</strong>{" "}
                component at a time. This is to make sure we can find out the
                exact location of the problem.
              </p>
            </div>
          </div>
        </CodeBlock>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-white">
            Details: Analysis of Possible Causes
          </h4>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              1. Mag Head
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The MagHead FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The MagHead FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_connector.png"
                  imageAlt="MagHead connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The MagHead FPC is damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              2. LCD
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The LCD FPC connection is loose: connect it tightly to the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                on the mainboard.
              </li>

              <li>
                • The LCD FPC connector is visibly damaged: replace the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC connector"
                >
                  Connector
                </ZoomableTextLink>{" "}
                (or the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>
                ).
              </li>

              <li>
                • The LCD FPC is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_1.png"
                  imageAlt="LCD FPC PIN_7 and PIN_24"
                >
                  PIN_7 & PIN_24
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_2.png"
                  imageAlt="LCD FPC normal resistance measurement"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of PIN_7, PIN_24) and
                GND of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png"
                  imageAlt="LCD FPC"
                >
                  LCD FPC
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              3. TP (Touch Panel)
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png"
                  imageAlt="TP mesh zebra strip"
                >
                  Zebra Strip
                </ZoomableTextLink>{" "}
                of the screen case is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The TP mesh is damaged: replace the whole{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/screen_case_front.png"
                  imageAlt="Screen Case"
                >
                  Screen Case
                </ZoomableTextLink>
                .
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_9"
                >
                  PIN_9
                </ZoomableTextLink>{" "}
                of the TP FPC and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_2"
                >
                  PIN_2
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_tp_measure_result.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_fpc_measure.png"
                  imageAlt="TP FPC PIN_7"
                >
                  PIN_7
                </ZoomableTextLink>{" "}
                of the TP FPC (the smaller one of the screen FPCs that is below
                LCD FPC) and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_mesh_measure.png"
                  imageAlt="TP MESH PIN_3"
                >
                  PIN_3
                </ZoomableTextLink>{" "}
                of the TP MESH using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_tp_measure.png"
                  imageAlt="TP normal resistance measurement"
                >
                  500 ohms
                </ZoomableTextLink>{" "}
                (around 100 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              4. RTC board
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png"
                  imageAlt="Right Zebra Strip"
                >
                  Right Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_upper_zebra.png"
                  imageAlt="RTC board"
                >
                  Upper Zebra Strip
                </ZoomableTextLink>{" "}
                of the RTC board is missing or damaged: insert a new one or
                replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board.png"
                  imageAlt="RTC board"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_fpc.png"
                  imageAlt="MagHead FPC PIN_2 and PIN_10"
                >
                  PIN_2 & PIN_10
                </ZoomableTextLink>{" "}
                of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mag_head.png"
                  imageAlt="MagHead"
                >
                  MagHead
                </ZoomableTextLink>{" "}
                FPC using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance is around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/mag_head_measure.png"
                  imageAlt="MagHead normal resistance measurement"
                >
                  3 ohms
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_1.png"
                  imageAlt="RTC board PIN_2 Right"
                >
                  PIN_2(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_2.png"
                  imageAlt="RTC board Outer PIN"
                >
                  Outer_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be around{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_3.png"
                  imageAlt="RTC board normal resistance 0 ohm"
                >
                  0 ohm
                </ZoomableTextLink>
                , which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_4.png"
                  imageAlt="RTC board PIN_4"
                >
                  PIN_4(Right)
                </ZoomableTextLink>{" "}
                and{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_5.png"
                  imageAlt="RTC board Inner PIN"
                >
                  Inner_PIN
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_two_zebra_measure_6.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_1.png"
                  imageAlt="RTC board Upper PIN_2 and PIN_4"
                >
                  PIN_2(Upper) & PIN_4(Upper)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 50 ohms"
                >
                  50 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                and (any of Upper PIN_1, PIN_3, PIN_5) of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between (any of Upper PIN_2, PIN_4)
                of the RTC board and any Right/Lower PIN of the{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png"
                  imageAlt="RTC board underneath layout"
                >
                  RTC board
                </ZoomableTextLink>{" "}
                using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be very large, which means it is
                an open circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_1.png"
                  imageAlt="RTC board PIN_3 Upper and PIN_1 Lower"
                >
                  PIN_3(Upper) and PIN_1(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_2.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 20 ohms usually), which means it is a closed circuit.
              </li>

              <li>
                === Measure the resistance between{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_3.png"
                  imageAlt="RTC board PIN_3 Lower and PIN_5 Lower"
                >
                  PIN_3(Lower) and PIN_5(Lower)
                </ZoomableTextLink>{" "}
                of the RTC board using a{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/multimeter.png"
                  imageAlt="Multimeter"
                >
                  Multimeter
                </ZoomableTextLink>
                . The normal resistance should be less than{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_four_rtc_measure_4.png"
                  imageAlt="RTC board normal resistance less than 100 ohms"
                >
                  100 ohms
                </ZoomableTextLink>{" "}
                (around 10 ohms usually), which means it is a closed circuit.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/45">
              5. Mainboard
            </h5>

            <ul className="space-y-2 text-sm leading-7 text-foreground/72">
              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png"
                  imageAlt="Carbon Particle"
                >
                  Carbon Particle
                </ZoomableTextLink>{" "}
                is missing: insert a new one or replace the old one.
              </li>

              <li>
                • The{" "}
                <ZoomableTextLink
                  href="/products/pos/i9100/spare/mainboard_front.png"
                  imageAlt="Mainboard"
                >
                  Mainboard
                </ZoomableTextLink>{" "}
                is damaged: replace it.
              </li>

              <li>
                === If you have tested everything other than the mainboard, it
                means the cause might be on the mainboard. You may replace the
                mainboard to see whether the problem can be fixed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
};

export const SystemAndSECommunicationFailed = () => {
  return (
    <SimpleTriggerCard
      title="0xFF000000"
      titleColor="#ef4444"
      description="System and SE communication failed."
      message={
        <ul>
          <li>
            • Please upgrade the Firmware(OS/SE) first. Check Firmware Upgrade
            Instruction{" "}
            <Link
              href="/projects/pos/i9100/p9x4m2k8#upgrade"
              className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              HERE.
            </Link>
          </li>
          <li>
            • Please measure the voltage of the{" "}
            <ZoomableTextLink
              href="/products/pos/i9100/safe_mode/rtc_battery_voltage_range.png"
              imageAlt="Past Error Code"
            >
              RTC battery
            </ZoomableTextLink>{" "}
            to see if it's out of power. (The normal range is between 3.0V &
            3.2V)
          </li>
        </ul>
      }
    />
  );
};

export const FirstTimeOnlineActivation = () => {
  return (
    <SimpleTriggerCard
      title="0x71000000"
      titleColor="#facc15"
      description="First-time online activation after the first installation."
      message="This code indicates that the device is entering online activation for the first time after installation. Please complete the activation process normally."
    />
  );
};

export const LowTemperatureTrigger = () => {
  return (
    <SimpleTriggerCard
      title="0x72000100"
      titleColor="#ef4444"
      description="Low temperature trigger."
      message="The device has been triggered by a low-temperature condition. Please return the device to a normal temperature environment and check again."
    />
  );
};

export const HighTemperatureTrigger = () => {
  return (
    <SimpleTriggerCard
      title="0x72002000"
      titleColor="#ef4444"
      description="High temperature trigger."
      message="The device has been triggered by a high-temperature condition. Please allow the device to cool down in a normal temperature environment and check again."
    />
  );
};

export const RTCBatteryLowVoltageTrigger = () => {
  return (
    <SimpleTriggerCard
      title="0x72000400"
      titleColor="#ef4444"
      description="RTC battery low voltage trigger."
      message={
        <>
          • Please measure the voltage of the{" "}
          <ZoomableTextLink
            href="/products/pos/i9100/safe_mode/rtc_battery_voltage_range.png"
            imageAlt="Past Error Code"
          >
            RTC battery
          </ZoomableTextLink>{" "}
          to see if it's out of power(The normal range is between 3.0V & 3.2V).
          Replace the RTC battery or the related RTC board components if it's
          abnormal.
        </>
      }
    />
  );
};

export const RTCBatteryLowVoltageAndLowTemperatureTrigger = () => {
  return (
    <SimpleTriggerCard
      title="0x72000500"
      titleColor="#ef4444"
      description="RTC battery low voltage and low temperature triggered simultaneously."
      message={
        <ul>
          <li>
            • The device has been triggered by a low-temperature condition.
            Please return the device to a normal temperature environment and
            check again.
          </li>
          <li>
            • Please measure the voltage of the{" "}
            <ZoomableTextLink
              href="/products/pos/i9100/safe_mode/rtc_battery_voltage_range.png"
              imageAlt="Past Error Code"
            >
              RTC battery
            </ZoomableTextLink>{" "}
            to see if it's out of power(The normal range is between 3.0V &
            3.2V). Replace the RTC battery or the related RTC board components
            if it's abnormal.
          </li>
        </ul>
      }
    />
  );
};

export const RTCBatteryLowVoltageAndHighTemperatureTrigger = () => {
  return (
    <SimpleTriggerCard
      title="0x72000600"
      titleColor="#ef4444"
      description="RTC battery low voltage and high temperature triggered simultaneously."
      message={
        <ul>
          <li>
            • The device has been triggered by a high-temperature condition.
            Please allow the device to cool down in a normal temperature
            environment and check again.
          </li>
          <li>
            • Please measure the voltage of the{" "}
            <ZoomableTextLink
              href="/products/pos/i9100/safe_mode/rtc_battery_voltage_range.png"
              imageAlt="Past Error Code"
            >
              RTC battery
            </ZoomableTextLink>{" "}
            to see if it's out of power(The normal range is between 3.0V &
            3.2V). Replace the RTC battery or the related RTC board components
            if it's abnormal.
          </li>
        </ul>
      }
    />
  );
};

export const RTCBatteryHighVoltageTrigger = () => {
  return (
    <SimpleTriggerCard
      title="0x72000800"
      titleColor="#ef4444"
      description="RTC battery high voltage trigger."
      message={
        <>
          • Please measure the voltage of the{" "}
          <ZoomableTextLink
            href="/products/pos/i9100/safe_mode/rtc_battery_voltage_range.png"
            imageAlt="Past Error Code"
          >
            RTC battery
          </ZoomableTextLink>{" "}
          to see if it's too high(The normal range is between 3.0V & 3.2V).
          Replace the RTC battery or the related RTC board components if it's
          abnormal.
        </>
      }
    />
  );
};

export const RTCBatteryHighVoltageAndLowTemperatureTrigger = () => {
  return (
    <SimpleTriggerCard
      title="0x72000900"
      titleColor="#ef4444"
      description="RTC battery high voltage and low temperature triggered simultaneously."
      message={
        <ul>
          <li>
            • The device has been triggered by a low-temperature condition.
            Please return the device to a normal temperature environment and
            check again.
          </li>
          <li>
            <>
              • Please measure the voltage of the{" "}
              <ZoomableTextLink
                href="/products/pos/i9100/safe_mode/rtc_battery_voltage_range.png"
                imageAlt="Past Error Code"
              >
                RTC battery
              </ZoomableTextLink>{" "}
              to see if it's too high(The normal range is between 3.0V & 3.2V).
              Replace the RTC battery or the related RTC board components if
              it's abnormal.
            </>
          </li>
        </ul>
      }
    />
  );
};

export const RTCBatteryHighVoltageAndHighTemperatureTrigger = () => {
  return (
    <SimpleTriggerCard
      title="0x72000A00"
      titleColor="#ef4444"
      description="RTC battery high voltage and high temperature triggered simultaneously."
      message={
        <ul>
          <li>
            • The device has been triggered by a high-temperature condition.
            Please allow the device to cool down in a normal temperature
            environment and check again.
          </li>
          <li>
            <>
              • Please measure the voltage of the{" "}
              <ZoomableTextLink
                href="/products/pos/i9100/safe_mode/rtc_battery_voltage_range.png"
                imageAlt="Past Error Code"
              >
                RTC battery
              </ZoomableTextLink>{" "}
              to see if it's too high(The normal range is between 3.0V & 3.2V).
              Replace the RTC battery or the related RTC board components if
              it's abnormal.
            </>
          </li>
        </ul>
      }
    />
  );
};

export const KeyVectorTableSelfTestFailed = () => {
  return (
    <SimpleTriggerCard
      title="0x74000001"
      titleColor="#ef4444"
      description="Key vector table self-test failed."
      message="This code indicates a self-test failure of the key vector table."
    />
  );
};

export const HighPassSideKeySelfTestFailed = () => {
  return (
    <SimpleTriggerCard
      title="0x74000002"
      titleColor="#ef4444"
      description="High pass side key self-test failed."
      message="This code indicates a self-test failure of the high-pass side key."
    />
  );
};

export const SESideKeySelfTestFailed = () => {
  return (
    <SimpleTriggerCard
      title="0x74000004"
      titleColor="#ef4444"
      description="SE side key self-test failed."
      message="This code indicates a self-test failure of the SE side key."
    />
  );
};

export const KeyVectorTableAndHighPassSideKeySelfTestFailed = () => {
  return (
    <SimpleTriggerCard
      title="0x74000003"
      titleColor="#ef4444"
      description="Key vector table and high pass side key failed self-check simultaneously."
      message="This code indicates simultaneous self-test failures in the key vector table and the high-pass side key."
    />
  );
};

export const KeyVectorTableAndSESideKeySelfTestFailed = () => {
  return (
    <SimpleTriggerCard
      title="0x74000005"
      titleColor="#ef4444"
      description="Key vector table and SE side key self-check failed simultaneously."
      message="This code indicates simultaneous self-test failures in the key vector table and the SE side key."
    />
  );
};

export const QualcommSideKeyAndSESideKeySelfTestFailed = () => {
  return (
    <SimpleTriggerCard
      title="0x74000006"
      titleColor="#ef4444"
      description="Simultaneous self-test failure of Qualcomm side key and SE side key."
      message="This code indicates simultaneous self-test failures in the Qualcomm side key and the SE side key."
    />
  );
};

export const AllKeySelfTestFailed = () => {
  return (
    <SimpleTriggerCard
      title="0x74000007"
      titleColor="#ef4444"
      description="Key vector table, high pass side key, and SE side key failed self-check simultaneously."
      message="This code indicates simultaneous self-test failures in all related key paths. Please inspect the related security path and hardware carefully."
    />
  );
};

export const TriggerStateNotReleased = () => {
  return (
    <SimpleTriggerCard
      title="0x73000002"
      titleColor="#facc15"
      description="The physical trigger point has been installed, but the trigger state has not been released."
      message={
        <>
          • This code indicates that the physical issue has been resolved, and
          the terminal is ready to be <strong>ACTIVATED</strong>. Please use an
          Activation Card to activate the terminal.
          <br />• Please note that the interface now is{" "}
          <ZoomableTextLink
            href="/products/pos/i9100/safe_mode/trigger_yellow_interface.png"
            imageAlt="Yellow interface"
          >
            Yellow
          </ZoomableTextLink>{" "}
          instead of{" "}
          <ZoomableTextLink
            href="/products/pos/i9100/safe_mode/trigger_red_interface.png"
            imageAlt="Yellow interface"
          >
            Red
          </ZoomableTextLink>{" "}
          . You can only activate a terminal when it's in Yellow interface. (Red
          interface means some physical issue has not yet beend resolved. Please
          refer to the{" "}
          <a
            href="https://cdn.patrick-shenzhen.org/urovo/products/i9100/i9100_Safe_Mode_Clear_Instruction_2025.docx"
            target="_blank"
            className="inline cursor-pointer font-medium text-pink-400 underline underline-offset-4 transition-colors hover:text-pink-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
          >
            Safe_Mode_Clear_Manual
          </a>{" "}
          and resolve it first before you activate the terminal.)
          <div className="mt-6 w-full overflow-hidden rounded-2xl border border-white/10">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/UtHbkkDFMsk"
                title="UMS Remote Management Tutorial"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-xs text-foreground/40">
            Note: You can enable subtitles by going to "Settings" → "Captions" →
            "Auto-translate", then selecting your preferred language.
          </p>
        </>
      }
    />
  );
};

function SimpleTriggerCard({
  title,
  description,
  message,
  titleColor,
}: {
  title: string;
  description: string;
  message: React.ReactNode;
  titleColor?: string;
}) {
  return (
    <CodeBlock
      title={title}
      description={description}
      titleStyle={titleColor ? { color: titleColor } : undefined}
    >
      <div className="text-sm leading-7 text-foreground/72">{message}</div>
    </CodeBlock>
  );
}
