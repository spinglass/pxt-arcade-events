function log(msg: string) {
    console.log("[" + game.runtime() + "] " + msg)
}

log("Begin code")
events.onEvent("test", () => {
    log("onEvent:test")
})

log("sendEventNow:test")
events.sendEventNow("test")

log("sendEvent:test:1")
events.sendEvent("test", 1)

log("End code")
