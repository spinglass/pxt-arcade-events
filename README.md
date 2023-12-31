 


> Open this page at [https://spinglass.github.io/pxt-arcade-events/](https://spinglass.github.io/pxt-arcade-events/)

## Usage

### ``sendEventNow``

Use the ``sendEventNow`` block to immediately fire an event.
This will replace any previously set time for the event.

```blocks
events.sendEventNow("myEventName")
```

### ``sendEvent``

Use the ``sendEvent`` block to immediately fire an event a number of seconds later.
This will replace any previously set time for the event.

```blocks
events.sendEvent("myEventName", 1)
```

### ``cancelEvent``

Use the ``cancelEvent`` block to stop the named event firing, if it was queued.

```blocks
events.cancelEvent("myEventName")
```

### ``cancelAllEvents``

Use the ``cancelAllEvents`` block to stop all queued events from firing.

```blocks
events.cancelAllEvents()
```

### ``onEvent``

Use the ``onEvent`` block to add a handler for an event of the given name.

```blocks
events.onEvent("myEventName", () => {
})
```

## Use as Extension ![MakeCode Arcade Release](https://github.com/spinglass/pxt-arcade-events/actions/workflows/makecode-release.yml/badge.svg)

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/spinglass/pxt-arcade-events** and import

## Edit this project ![Build status badge](https://github.com/spinglass/pxt-arcade-events/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/spinglass/pxt-arcade-events** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
