function Str (element)
  -- Replace :fontawesome-brands-amazon: with \faAmazon
  if element.text == ":fontawesome-brands-amazon:" then
    return pandoc.RawInline("latex", "\\faAmazon")
  elseif element.text == ":fontawesome-brands-google:" then
    return pandoc.RawInline("latex", "\\faGoogle")
  elseif element.text == ":fontawesome-brands-linkedin:" then
    return pandoc.RawInline("latex", "\\faLinkedin")
  elseif element.text == ":fontawesome-brands-twitter:" then
    return pandoc.RawInline("latex", "\\faTwitter")
  elseif element.text == ":fontawesome-brands-github:" then
    return pandoc.RawInline("latex", "\\faGithub")
  elseif element.text == ":fontawesome-brands-stack-overflow:" then
    return pandoc.RawInline("latex", "\\faStackOverflow")
  elseif element.text == ":fontawesome-brands-facebook:" then
    return pandoc.RawInline("latex", "\\faFacebook")
  elseif element.text == ":fontawesome-brands-instagram:" then
    return pandoc.RawInline("latex", "\\faInstagram")
  elseif element.text == ":simple-github:" then
    return pandoc.RawInline("latex", "\\faGithub")
  else
    return element
  end
end
