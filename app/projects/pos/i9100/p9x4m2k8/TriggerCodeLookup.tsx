"use client";

import React from "react";
import {
  TriggerOne,
  TriggerTwo,
  TriggerThree,
  TriggerFour,
  TriggerEight,
  TriggerFive,
  TriggerSix,
  TriggerSeven,
  TriggerFifteen,
  TriggerNine,
  TriggerTen,
  TriggerEleven,
  TriggerTwelve,
  TriggerThirteen,
  LowTemperatureTrigger,
  HighTemperatureTrigger,
  RTCBatteryLowVoltageTrigger,
  RTCBatteryLowVoltageAndLowTemperatureTrigger,
  RTCBatteryLowVoltageAndHighTemperatureTrigger,
  RTCBatteryHighVoltageTrigger,
  RTCBatteryHighVoltageAndLowTemperatureTrigger,
  RTCBatteryHighVoltageAndHighTemperatureTrigger,
  KeyVectorTableSelfTestFailed,
  HighPassSideKeySelfTestFailed,
  KeyVectorTableAndHighPassSideKeySelfTestFailed,
  SESideKeySelfTestFailed,
  KeyVectorTableAndSESideKeySelfTestFailed,
  QualcommSideKeyAndSESideKeySelfTestFailed,
  AllKeySelfTestFailed,
  TriggerStateNotReleased,
  SystemAndSECommunicationFailed,
  FirstTimeOnlineActivation,
  TriggerFourteen,
  TriggerZero,
} from "./TriggerModes";

const triggerMap = {
  FF000000: SystemAndSECommunicationFailed,
  "71000000": FirstTimeOnlineActivation,

  "72000000": TriggerZero,
  "72000001": TriggerOne,
  "72000002": TriggerTwo,
  "72000003": TriggerThree,
  "72000004": TriggerFour,
  "72000005": TriggerFive,
  "72000006": TriggerSix,
  "72000007": TriggerSeven,
  "72000008": TriggerEight,
  "72000009": TriggerNine,
  "7200000A": TriggerTen,
  "7200000B": TriggerEleven,
  "7200000C": TriggerTwelve,
  "7200000D": TriggerThirteen,
  "7200000E": TriggerFourteen,
  "7200000F": TriggerFifteen,

  "72000100": LowTemperatureTrigger,
  "72002000": HighTemperatureTrigger,

  "72000400": RTCBatteryLowVoltageTrigger,
  "72000500": RTCBatteryLowVoltageAndLowTemperatureTrigger,
  "72000600": RTCBatteryLowVoltageAndHighTemperatureTrigger,
  "72000800": RTCBatteryHighVoltageTrigger,
  "72000900": RTCBatteryHighVoltageAndLowTemperatureTrigger,
  "72000A00": RTCBatteryHighVoltageAndHighTemperatureTrigger,

  "74000001": KeyVectorTableSelfTestFailed,
  "74000002": HighPassSideKeySelfTestFailed,
  "74000003": KeyVectorTableAndHighPassSideKeySelfTestFailed,
  "74000004": SESideKeySelfTestFailed,
  "74000005": KeyVectorTableAndSESideKeySelfTestFailed,
  "74000006": QualcommSideKeyAndSESideKeySelfTestFailed,
  "74000007": AllKeySelfTestFailed,

  "73000002": TriggerStateNotReleased,
};

export const TriggerCodeLookup = () => {
  const [code, setCode] = React.useState("");

  const normalizedCode = code.trim().toUpperCase().replace(/^0x/i, "");
  const MatchedComponent =
    triggerMap[normalizedCode as keyof typeof triggerMap] ?? null;

  const showError = normalizedCode.length > 0 && !MatchedComponent;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Trigger Code Analysis
            </h3>
            <p className="mt-1 text-sm text-foreground/60">
              Enter the trigger code to check the repair guide.
            </p>
          </div>

          <div className="flex items-center rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <span className="mr-2 text-sm font-medium text-foreground/45">
              0x
            </span>

            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g. 72000001"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-foreground/35"
            />
          </div>

          {showError && (
            <p className="text-sm text-red-400">
              Unsupported trigger code. Please check the code and try again.
            </p>
          )}
        </div>
      </div>

      {MatchedComponent && <MatchedComponent />}
    </div>
  );
};
