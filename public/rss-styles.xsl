<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>NextReach Studio — RSS Feed</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 40px auto; max-width: 700px; padding: 0 20px; background: #0a0a0a; color: #d4d4d8; }
    h1 { color: #fbbf24; font-size: 1.5rem; }
    a { color: #fbbf24; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .entry { border-bottom: 1px solid #27272a; padding: 20px 0; }
    .entry-title { font-size: 1.125rem; font-weight: 600; margin: 0 0 6px; }
    .entry-date { font-size: 0.875rem; color: #71717a; margin-bottom: 8px; }
    .entry-desc { font-size: 0.9375rem; line-height: 1.5; color: #a1a1aa; }
    .feed-desc { color: #71717a; margin-bottom: 30px; }
  </style>
</head>
<body>
  <h1><xsl:value-of select="/rss/channel/title"/></h1>
  <p class="feed-desc"><xsl:value-of select="/rss/channel/description"/></p>
  <xsl:for-each select="/rss/channel/item">
    <div class="entry">
      <div class="entry-title"><a href="{link}"><xsl:value-of select="title"/></a></div>
      <div class="entry-date"><xsl:value-of select="pubDate"/></div>
      <div class="entry-desc"><xsl:value-of select="description"/></div>
    </div>
  </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
