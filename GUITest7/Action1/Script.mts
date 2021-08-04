wait(3)
Device("Device").App("Advantage").MobileButton("LOGIN").Tap
Device("Device").App("Advantage").MobileLabel("Savings").Tap
Device("Device").App("Advantage").MobileButton("ic action back2").Tap
Device("Device").App("Advantage").MobileButton("MobileButton").Tap
Device("Device").App("Advantage").MobileLabel("MONEY TRANSFER").Tap
Device("Device").App("Advantage").MobileEdit("MobileEdit_2").Tap
Device("Device").EnterKeys 0,"100"
Device("Device").App("Advantage").MobileButton("TRANSFER").Tap
Device("Device").App("Advantage").MobileButton("OK").Tap
Device("Device").App("Advantage").MobileButton("MobileButton").Tap
Device("Device").App("Advantage").MobileLabel("LOGOUT").Tap
Device("Device").App("Advantage").MobileButton("Yes").Tap
