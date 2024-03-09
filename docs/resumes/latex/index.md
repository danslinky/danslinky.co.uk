---
tags:
- markdown
- latex
- lua
- pandoc
- resume
- fontawesome
---
# :simple-latex: LaTeX

__[resume.tex](resume.tex)__ is work in progress, and generates __[resume.pdf](resume.pdf "Dan Slinky's PDF resume file")__

I `make` use of the `fontawesome5` package, and a [Lua](fontawesome.lua) `pandoc` filter to workaround not having worked out how to support v6 of fontawesome yet.

It also generates __[resume.docx](resume.docx "Dan Slinky's Microsoft Word resume file")__

## example

```lua title="pandoc -L fontawesome.lua ..."
function Str(element)
  -- Map markdown icon names to LaTeX commands
  local icon_map = {
    ["rick-astley"] = "\\faRickAstley"
    -- ...
  }

  -- Match :icon: pattern
  local icon = string.match(element.text, "^:(.*):$")
  if icon then
    -- Replace :icon: with corresponding LaTeX command or empty string
    local latex_icon = icon_map[icon] or ""
    return pandoc.RawInline("latex", latex_icon)
  else
    return element
  end

end
```

## notes

- fix errors with `[link](javascript:xxx)`
- `fontawesome.lua` could be improved with more icon support
- superfences markdown tabbed content doesn't render well, and interprets it as a codeblock without wrap
