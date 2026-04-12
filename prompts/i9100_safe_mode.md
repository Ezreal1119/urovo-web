# 0x72000010 (Trigger 1)

## Quick Fix Guide:

1. Make sure the terminal is assembled tightly enough, with no visible gap between the screen case and the back case.
2. Make sure all three [**Zebra Strips**](/public/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png) under the RTC board are properly in place and not visibly damaged.
3. Make sure the [**MagHead FPC**](/public/products/pos/i9100/safe_mode/mag_head_connector.png) is connected well to the mainboard, and that the connector has no visible damage.
4. **ONLY** replace the [**MagHead**](/public/products/pos/i9100/spare/mag_head.png) and check again.
5. **ONLY** replace the [**Small RTC board**](/public/products/pos/i9100/safe_mode/rtc_coin.png) (or the whole [**Bracket**](/public/products/pos/i9100/safe_mode/rtc_board.png)) and check again.
6. **ONLY** replace the [**Mainboard**](/public/products/pos/i9100/spare/mainboard_front.png) and check again.

(Note: please **ONLY** replace **ONE** component at a time. This is to make sure we can find out the exact location of the problem.)

### Analysis of Possible Causes of Trigger 1 in details:

1. [**MagHead**](/public/products/pos/i9100/spare/mag_head.png):

- The MagHead FPC connection is loose: Connect it tightly to the [Connector](/public/products/pos/i9100/safe_mode/mag_head_connector.png) on the mainboard.
- The MagHead FPC connector is visibly damaged: Replace the [Connector](/public/products/pos/i9100/safe_mode/mag_head_connector.png) (or the whole [Mainboard](/public/products/pos/i9100/spare/mainboard_front.png)).
- The MagHead FPC is damaged: Replace the [MagHead](/public/products/pos/i9100/spare/mag_head.png).
  - Measure the resistance between [PIN_2 & PIN_10](/public/products/pos/i9100/safe_mode/mag_head_fpc.png) of the MagHead FPC using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance is around [3 ohms](/public/products/pos/i9100/safe_mode/mag_head_measure.png), which means it is a closed circuit.

2. [**RTC board**](/public/products/pos/i9100/safe_mode/rtc_board.png)

- The [Right Zebra Strip](/public/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png) of the RTC board is missing or damaged: Insert a new one or replace the old one.
- The RTC board is damaged: Replace the [RTC board](/public/products/pos/i9100/safe_mode/rtc_board.png).
  - Measure the resistance between [PIN_1 and PIN_3](/public/products/pos/i9100/safe_mode/trigger_one_rtc_board_1.png) of the RTC board under the right Zebra Strip using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance is around [15 ohms](/public/products/pos/i9100/safe_mode/trigger_one_rtc_measure_1.png), which means it is a closed circuit.
  - Measure the resistance between (any of PIN_1, PIN_3) and (any of PIN_2, PIN_4, PIN_5) of the [RTC board](/public/products/pos/i9100/safe_mode/rtc_board_underneath_layout.png) under the right Zebra Strip using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance should be very large, which means it is an open circuit.

3. [**Mainboard**](/public/products/pos/i9100/spare/mainboard_front.png)

- The mainboard is damaged: Replace the [Mainboard](/public/products/pos/i9100/spare/mainboard_front.png).
  - If you have tested everything other than the mainboard, it means the cause might be on the mainboard. You may replace the mainboard to see whether the problem can be fixed.

---

# 0x72000010 (Trigger 2)

## Quick Fix Guide:

1. Make sure the terminal is assembled tightly enough, with no visible gap between the screen case and the back case.
2. Make sure all three [**Carbon Particles**](/public/products/pos/i9100/safe_mode/carbon_particles.png) on the back case are properly in place and not visibly damaged.
3. Make sure all three [**Zebra Strips**](/public/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png) under the RTC board are properly in place and not visibly damaged.
4. Make sure the [**LCD FPC**](/public/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png) (the larger one of the screen FPCs) is connected well to the mainboard, and that the connector has no visible damage.
5. **ONLY** replace the [**Small RTC board**](/public/products/pos/i9100/safe_mode/rtc_coin.png) (or the whole [**Bracket**](/public/products/pos/i9100/safe_mode/rtc_board.png)) and check again.
6. **ONLY** replace the [**Mainboard**](/public/products/pos/i9100/spare/mainboard_front.png) and check again.

(Note: please **ONLY** replace one component at a time. This is to make sure we can find out the exact location of the problem.)

### Analysis of Possible Causes of Trigger 2 in details:

1. **LCD**:

- The LCD FPC connection is loose: Connect it tightly to the [Connector](/public/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png) on the mainboard.
- The LCD FPC connector is visibly damaged: Replace the [Connector](/public/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png) (or the whole [Mainboard](/public/products/pos/i9100/spare/mainboard_front.png)).
- The LCD FPC is damaged: Replace the whole [Screen Case](/public/products/pos/i9100/spare/screen_case_front.png).
  - Measure the resistance between [PIN_7 & PIN_24](/public/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_1.png) of the [LCD FPC](/public/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png) using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance should be less than [100 ohms](/public/products/pos/i9100/safe_mode/trigger_two_lcd_fpc_measure_2.png) (around 20 ohms usually), which means it is a closed circuit.
  - Measure the resistance between (any of PIN_7, PIN_24) and GND of the [LCD FPC](/public/products/pos/i9100/safe_mode/trigger_two_lcd_fpc.png) using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance should be very large, which means it is an open circuit.

2. **RTC board**:

- The [Carbon Particle](/public/products/pos/i9100/safe_mode/trigger_two_carbon_particle.png) is missing: Insert a new one or replace the old one.
- The [Right Zebra Strip](/public/products/pos/i9100/safe_mode/rtc_board_right_zebra_strip.png) of the RTC board is missing or damaged: Insert a new one or replace the old one.
- The [RTC board](/public/products/pos/i9100/safe_mode/rtc_board.png): replace it.
  - Measure the resistance between [PIN_2(Right)](/public/products/pos/i9100/safe_mode/trigger_two_zebra_measure_1.png) & [Outer_PIN](/public/products/pos/i9100/safe_mode/trigger_two_zebra_measure_2.png) of the RTC board using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance should be around [0 ohms](/public/products/pos/i9100/safe_mode/trigger_two_zebra_measure_3.png), which means it is a closed circuit.
  - Measure the resistance between [PIN_4](/public/products/pos/i9100/safe_mode/trigger_two_zebra_measure_4.png) & [Inner_PIN](/public/products/pos/i9100/safe_mode/trigger_two_zebra_measure_5.png) of the RTC board using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance should be less than [50 ohms](/public/products/pos/i9100/safe_mode/trigger_two_zebra_measure_6.png) (around 10 ohms usually), which means it is a closed circuit.

3. **Mainboard**:

- The [Mainboard](/public/products/pos/i9100/spare/mainboard_front.png) is damaged: replace it.
  - If you have tested everything other than the mainboard, it means the cause might be on the mainboard. You may replace the mainboard to see whether the problem can be fixed.

---

# 0x72000004(Trigger 3)

## Quick Fix Guide:

1. Make sure the terminal is assembled tightly enough, with no visible gap between the screen case and the back case.
2. Make sure all three [**Carbon Particles**](/public/products/pos/i9100/safe_mode/carbon_particles.png) on the back case are properly in place and not visibly damaged.
3. Make sure all three [**Zebra Strips**](/public/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png) under the RTC board are properly in place and not visibly damaged.
4. Make sure the [**Zebra Strip**](/public/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png) on the screen case is properly in place and not visibly damaged.
5. **ONLY** replace the [**Small RTC board**](/public/products/pos/i9100/safe_mode/rtc_coin.png) (or the whole [**Bracket**](/public/products/pos/i9100/safe_mode/rtc_board.png)) and check again.
6. **ONLY** replace the [**Screen Case**](/public/products/pos/i9100/spare/screen_case_front.png) and check again.
7. **ONLY** replace the [**Mainboard**](/public/products/pos/i9100/spare/mainboard_front.png) and check again.

(Note: please **ONLY** replace one component at a time. This is to make sure we can find out the exact location of the problem.)

### Analysis of Possible Causes of Trigger 3 in details:

1. **TP (Touch Panel)**:

- The [Zebra Strip](/public/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png) of the screen case is missing or damaged: Insert a new one or replace the old one.
- The TP mesh is damaged: Replace the whole [Screen Case](/public/products/pos/i9100/spare/screen_case_front.png).
  - Measure the resistance between [PIN_9](/public/products/pos/i9100/safe_mode/trigger_three_tp_fpc_measure.png) of the TP FPC and [PIN_2](/public/products/pos/i9100/safe_mode/trigger_three_tp_mesh_measure.png) of the TP MESH using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance should be less than [500 ohms](/public/products/pos/i9100/safe_mode/trigger_three_tp_measure_result.png) (around 100 ohms usually), which means it is a closed circuit.

2. **RTC board**:

- The upper Zebra Strip of the RTC board is missing or damaged: Insert a new one or replace the old one.
- The [RTC board](/public/products/pos/i9100/safe_mode/rtc_board.png): replace it.
  - Measure the resistance between [PIN_2(Upper) & PIN_4(Upper)](/public/products/pos/i9100/safe_mode/trigger_three_rtc_measure_1.png) of the RTC board using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance should be less than [50 ohms](/public/products/pos/i9100/safe_mode/trigger_three_rtc_measure_1.png) (around 10 ohms usually), which means it is a closed circuit.
  - Measure the resistance between (any of Upper PIN_2, PIN_4) & (any of Upper PIN_1, PIN_3, PIN_5) of the RTC board using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance should be very large, which means it is an open circuit.
  - Measure the resistance between (any of Upper PIN_2, PIN_4) of the RTC board & any Right/Lower PIN of the RTC board using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance should be very large, which means it is an open circuit.

3. **Mainboard**:

- The [Carbon Particle](/public/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png) is missing: Insert a new one or replace the old one.
- The [Mainboard](/public/products/pos/i9100/spare/mainboard_front.png) is damaged: replace it.
  - If you have tested everything other than the mainboard, it means the cause might be on the mainboard. You may replace the mainboard to see whether the problem can be fixed.

---

# 0x72000008(Trigger 4)

## Quick Fix Guide:

1. Make sure the terminal is assembled tightly enough, with no visible gap between the screen case and the back case.
2. Make sure all three [**Carbon Particles**](/public/products/pos/i9100/safe_mode/carbon_particles.png) on the back case are properly in place and not visibly damaged.
3. Make sure all three [**Zebra Strips**](/public/products/pos/i9100/safe_mode/rtc_board_all_zebra_strips.png) under the RTC board are properly in place and not visibly damaged.
4. Make sure the [**Zebra Strip**](/public/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png) on the screen case is properly in place and not visibly damaged.
5. **ONLY** replace the [**Small RTC board**](/public/products/pos/i9100/safe_mode/rtc_coin.png) (or the whole [**Bracket**](/public/products/pos/i9100/safe_mode/rtc_board.png)) and check again.
6. **ONLY** replace the [**Screen Case**](/public/products/pos/i9100/spare/screen_case_front.png) and check again.
7. **ONLY** replace the [**Mainboard**](/public/products/pos/i9100/spare/mainboard_front.png) and check again.

(Note: please **ONLY** replace one component at a time. This is to make sure we can find out the exact location of the problem.)

### Analysis of Possible Causes of Trigger 4 in details:

1. **TP (Touch Panel)**:

- The [Zebra Strip](/public/products/pos/i9100/safe_mode/trigger_three_tp_mesh_zebra.png) of the screen case is missing or damaged: Insert a new one or replace the old one.
- The TP mesh is damaged: Replace the whole [Screen Case](/public/products/pos/i9100/spare/screen_case_front.png).
  - Measure the resistance between [PIN_7](/public/products/pos/i9100/safe_mode/trigger_four_tp_fpc_measure.png) of the TP FPC (the smaller one of the screen FPCs that is below LCD FPC) and [PIN_3](/public/products/pos/i9100/safe_mode/trigger_four_tp_mesh_measure.png) of the TP MESH using a [Multimeter](/public/products/pos/i9100/safe_mode/multimeter.png). The normal resistance should be less than [500 ohms](/public/products/pos/i9100/safe_mode/trigger_four_tp_measure.png) (around 100 ohms usually), which means it is a closed circuit.

2. **RTC board**:

- The [Upper/Lower Zebra Strips](/public/products/pos/i9100/safe_mode/trigger_four_zebra_strips.png) of the RTC board are missing or damaged: Insert a new one or replace the old one.
- The [RTC board](/public/products/pos/i9100/safe_mode/rtc_board.png): replace it.
  - Measure the resistance between [PIN_3(Upper) and PIN_1(Lower)](/public/products/pos/i9100/safe_mode/trigger_four_rtc_measure_1.png) of the RTC board using a multimeter. The normal resistance should be less than [100 ohms](/public/products/pos/i9100/safe_mode/trigger_four_rtc_measure_2.png) (around 20 ohms usually), which means it is a closed circuit.
  - Measure the resistance between [PIN_3(Lower) and PIN_5(Lower)](/public/products/pos/i9100/safe_mode/trigger_four_rtc_measure_3.png) of the RTC board using a multimeter. The normal resistance should be less than [100 ohms](/public/products/pos/i9100/safe_mode/trigger_four_rtc_measure_4.png) (around 10 ohms usually), which means it is a closed circuit.

3. **Mainboard**:

- The [Carbon Particle](/public/products/pos/i9100/safe_mode/trigger_three_carbon_particle.png) is missing: Insert a new one or replace the old one.
- The [Mainboard](/public/products/pos/i9100/spare/mainboard_front.png) is damaged: replace it.
  - If you have tested everything other than the mainboard, it means the cause might be on the mainboard. You may replace the mainboard to see whether the problem can be fixed.
