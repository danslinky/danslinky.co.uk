---
draft: true
authors:
  - danslinky
date: 2024-03-14
categories:
- blog
tags:
- blog
- slack
- emojis
---

# untitled

## platform engineering emoji bot

> There's probably already one.

At the time of writing,

```sh title="pseudo plan"
# read a slack message
if contains 
    # [skip ci]
    # [ci skip]
    # [no ci]
    # [skip actions]
    # [actions skip]
else
# measure the sentiment 
if sad:
# if it sounds sad, etc, don't add any emojis (or perhaps add a heart emoji?)
if happy: 
# try to find the top 5 appropriate emojis in the slack database of emojis
# and add the slack reactions 
else
# nothing
BONUS: /emoji remove on the thread, or on last message will remove the emojis
BONUS: configure a #channel to have default emojis
BONUS: /emoji disable in a channel
# /slash examples
/emoji enable 
/emoji disable
/emoji mute # silence the bot
/emoji configure # popup configuration 
/emoji remove # remove emojis from a message
/emoji score # top 10 emojis in the channel. How is this tracked?
```

It should probably be in `node`, but first letsss:snake:

```py title="rough python"
import slack_sdk
from nltk.sentiment import SentimentIntensityAnalyzer

# Initialize the Slack client and the sentiment analyzer
client = slack_sdk.WebClient(token='your-slack-token')
analyzer = SentimentIntensityAnalyzer()

# Read a Slack message
message = client.conversations_history(channel='channel-id', limit=1)['messages'][0]['text']

# Skip if contains certain phrases
if any(phrase in message for phrase in ['[skip ci]', '[ci skip]', '[no ci]', '[skip actions]', '[actions skip]']):
    pass
else:
    # Measure the sentiment
    sentiment = analyzer.polarity_scores(message)

    # If it sounds sad, etc, don't add any emojis (or perhaps add a heart emoji?)
    if sentiment['compound'] < -0.05:
        client.reactions_add(channel='channel-id', timestamp='message-timestamp', name='heart')
    # If it's a positive sentiment, try to find the top 5 appropriate emojis in the Slack database of emojis and add the Slack reactions
    elif sentiment['compound'] > 0.05:
        emojis = client.emoji_list()['emoji'].keys()
        for emoji in emojis[:5]:
            client.reactions_add(channel='channel-id', timestamp='message-timestamp', name=emoji)
```

Whether a Node.js bot would be "better" depends on your specific needs and constraints. Both Python and Node.js have robust libraries for interacting with the Slack API, so you can create a Slack bot in either language. Here are some factors to consider:

**Performance**: Node.js is generally faster than Python, which could make a difference if your bot needs to handle a large number of requests or perform complex computations. However, for a simple bot like the one you're planning, the difference in performance is unlikely to be noticeable.

**Concurrency**: Node.js is designed for asynchronous I/O, which makes it a good choice for applications that need to handle many concurrent connections, such as a chat bot. Python can also handle asynchronous I/O, but it's not as integral to the language as it is in Node.js.

Ease of use: Python is often praised for its readability and ease of use, which can make it a good choice if you're new to programming or if you want to get your bot up and running quickly. Node.js can be more complex to set up and use, especially if you're not already familiar with JavaScript.

Libraries and tools: Both Python and Node.js have a wide range of libraries and tools that can help you build your bot. For example, Python has the slack_sdk and nltk libraries, while Node.js has @slack/web-api and franc-min.

Here's how you could implement your bot in Node.js:

```js title="rough node"
const { WebClient } = require('@slack/web-api');
const franc = require('franc-min');

const token = 'your-slack-token';
const web = new WebClient(token);

(async () => {
  // Read a Slack message
  const result = await web.conversations.history({ channel: 'channel-id', limit: 1 });
  const message = result.messages[0].text;

  // Skip if contains certain phrases
  if (['[skip ci]', '[ci skip]', '[no ci]', '[skip actions]', '[actions skip]'].some(phrase => message.includes(phrase))) {
    return;
  }

  // Measure the sentiment
  const sentiment = franc(message);

  // If it sounds sad, etc, don't add any emojis (or perhaps add a heart emoji?)
  if (sentiment === 'neg') {
    await web.reactions.add({ channel: 'channel-id', timestamp: 'message-timestamp', name: 'heart' });
  }
  // If it's a positive sentiment, try to find the top 5 appropriate emojis in the Slack database of emojis and add the Slack reactions
  else if (sentiment === 'pos') {
    const emojis = await web.emoji.list();
    for (const emoji of Object.keys(emojis.emoji).slice(0, 5)) {
      await web.reactions.add({ channel: 'channel-id', timestamp: 'message-timestamp', name: emoji });
    }
  }
})();
```

## Slack API

Before we do anything with code, we have to file some YAML with https://app.slack.com

```yaml title="Slack app"
_metadata:
  major_version: 1
  minor_version: 1
display_information:
  name: cthulbernetes-slack-emojis
  description: Innapropriate Emoji reactions to your messages
  background_color: "#d982b5"
features:
  bot_user:
    display_name: Cthulbernetes
    always_online: true
  app_home:
    home_tab_enabled: true
    messages_tab_enabled: true
    messages_tab_read_only_enabled: true
oauth_config:
  scopes:
    bot:
      - app_mentions:read
      - channels:history
      - channels:join
      - channels:manage
      - channels:read
      - chat:write.customize
      - chat:write.public
      - chat:write
      - files:read
      - files:write
      - groups:history
      - groups:read
      - groups:write
      - im:history
      - im:read
      - im:write
      - links:read
      - links:write
      - mpim:history
      - mpim:read
      - mpim:write
      - pins:read
      - pins:write
      - reactions:read
      - reactions:write
      - reminders:read
      - reminders:write
      - team:read
      - usergroups:read
      - usergroups:write
      - users:read
      - users:write
      - users.profile:read
settings:
  event_subscriptions:
    bot_events:
      - app_mention
  interactivity:
    is_enabled: true
  org_deploy_enabled: true
  socket_mode_enabled: true
```
