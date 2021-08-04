wait(5)
'launching the app
wait(10)
Device("Device").App("Advantage").MobileButton("LOGIN").Tap
wait(2)
Device("Device").App("Advantage").MobileLabel("Savings").Tap
Device("Device").App("Advantage").MobileButton("ic action back2").Tap
Device("Device").App("Advantage").MobileButton("MobileButton").Tap
Device("Device").App("Advantage").MobileLabel("MONEY TRANSFER").Tap
Device("Device").App("Advantage").MobileEdit("MobileEdit_2").Tap
Device("Device").EnterKeys 0,"100"
Device("Device").App("Advantage").MobileButton("TRANSFER").Tap
Device("Device").App("Advantage").MobileButton("OK").Tap
wait(2)
Device("Device").App("Advantage").MobileButton("MobileButton").Tap

Device("Device").App("Advantage").MobileLabel("LOGOUT").Tap
'Device("Device").App("Advantage").MobileButton("Yes").Tap
Device("Device").InsightObject("InsightObject").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
