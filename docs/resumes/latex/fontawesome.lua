-- function Para(element)
--   -- If the line contains === “CERN”, it's a section break
--   for i, el in pairs(element.content) do
--     if el.text and string.match(el.text, "^=== “(.*)”$") then
--       -- Extract the section title
--       local section_title = string.match(el.text, "^=== “(.*)”$")
--       -- Replace === “CERN” with \section{CERN} in the element
--       return pandoc.RawBlock("latex", "\\section{" .. section_title .. "}")
--     end
--   end
--   return element
-- end

function Div(element)
  if element.classes[1] == "newpage" then
    return pandoc.RawBlock("latex", "\\newpage")
  else
    return element
  end
end

function Str(element)
  -- Map markdown icon names to LaTeX commands
  local icon_map = {
    ["fontawesome-brands-amazon"] = "\\faAmazon",
    ["fontawesome-brands-apple"] = "\\faApple",
    ["fontawesome-brands-aws"] = "\\faAws",
    ["fontawesome-brands-google"] = "\\faGoogle",
    ["fontawesome-brands-linkedin"] = "\\faLinkedin",
    ["fontawesome-brands-twitter"] = "\\faTwitter",
    ["fontawesome-brands-github"] = "\\faGithub",
    ["fontawesome-brands-stack-overflow"] = "\\faStackOverflow",
    ["fontawesome-brands-facebook"] = "\\faFacebook",
    ["fontawesome-brands-instagram"] = "\\faInstagram",
    ["simple-markdown"] = "\\faMarkdown",
    ["simple-github"] = "\\faGithub",
    ["fontawesome-brands-microsoft"] = "\\faMicrosoft",
    ["simple-jenkins"] = "\\faJenkins",
    ["fontawesome-solid-terminal"] = "\\faTerminal",
    ["material-history"] = "\\faHistory",
    ["material-school"] = "\\faSchool",
    ["material-gamepad"] = "\\faGamepad",
    ["material-thumb-up"] = "\\faThumbsUp",
    ["material-linux"] = "\\faLinux",
    ["material-briefcase"] = "\\faBriefcase",
    ["material-code"] = "\\faCode",
    ["material-email"] = "\\faEnvelope",
    -- ["material-terraform"] = "\\faTerraform",
    ["material-people"] = "\\faPeople",
    ["material-people-outline"] = "\\faPeople",
    ["material-docker"] = "\\faDocker",
    ["material-dharmachakra"] = "\\faDharmachakra",
    ["material-bike"] = "\\faBicycle",
    ["material-youtube"] = "\\faYoutube",
    ["material-office-building"] = "\\faBuilding",
    ["material-train"] = "\\faTrain",
    ["material-atom"] = "\\faAtom",
    ["material-linkedin"] = "\\faLinkedin"
    -- ["material-camel"] = "\\faCamel"
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
