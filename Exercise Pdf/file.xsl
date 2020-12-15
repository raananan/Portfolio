<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.stylusstudio.com/xquery">
    <xsl:template match="/">
        <fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
            <fo:layout-master-set>
                <fo:simple-page-master master-name="A4" page-height="11in" page-width="8.5in" margin-left="0.6in" margin-right="0.6in" margin-top="0.79in" margin-bottom="0.79in">
                    <fo:region-body/>
                </fo:simple-page-master>
            </fo:layout-master-set>
            <fo:page-sequence master-reference="A4">
                <fo:flow flow-name="xsl-region-body">
                    <fo:block>
                        <fo:block>
                            <fo:inline font-size="28pt">
                                <xsl:text>An xslfo sample</xsl:text>
                            </fo:inline>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <fo:inline font-size="11pt" font-weight="normal">
                                <xsl:text>This sample has some list items:</xsl:text>
                            </fo:inline>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <fo:list-block provisional-distance-between-starts="30pt" provisional-label-separation="10pt">
                                <fo:list-item>
                                    <fo:list-item-label end-indent="label-end()">
                                        <fo:block>*</fo:block>
                                    </fo:list-item-label>
                                    <fo:list-item-body start-indent="body-start()">
                                        <fo:block>
                                            <fo:inline font-size="11pt">
                                                <xsl:text>Item 1</xsl:text>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:list-item-body>
                                </fo:list-item>
                            </fo:list-block>
                            <fo:list-block provisional-distance-between-starts="30pt" provisional-label-separation="10pt">
                                <fo:list-item>
                                    <fo:list-item-label end-indent="label-end()">
                                        <fo:block>*</fo:block>
                                    </fo:list-item-label>
                                    <fo:list-item-body start-indent="body-start()">
                                        <fo:block>
                                            <fo:inline font-size="11pt">
                                                <xsl:text>Item 2</xsl:text>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:list-item-body>
                                </fo:list-item>
                            </fo:list-block>
                            <fo:list-block provisional-distance-between-starts="30pt" provisional-label-separation="10pt">
                                <fo:list-item>
                                    <fo:list-item-label end-indent="label-end()">
                                        <fo:block>*</fo:block>
                                    </fo:list-item-label>
                                    <fo:list-item-body start-indent="body-start()">
                                        <fo:block>
                                            <fo:inline font-size="11pt">
                                                <xsl:text>And item 3</xsl:text>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:list-item-body>
                                </fo:list-item>
                            </fo:list-block>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <fo:inline font-size="11pt">
                                <xsl:text>It also has a table</xsl:text>
                            </fo:inline>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <fo:table width="100%" border-style="outset" border-width="2pt" background-repeat="repeat">
                                <fo:table-column/>
                                <fo:table-column/>
                                <fo:table-column/>
                                <fo:table-body>
                                    <fo:table-row>
                                        <fo:table-cell border-style="inset" border-width="2pt" padding="2pt" background-repeat="repeat" display-align="center">
                                            <fo:block>
                                                <fo:inline font-weight="bold">
                                                    <xsl:text>Header row</xsl:text>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell border-style="inset" border-width="2pt" padding="2pt" background-repeat="repeat" display-align="center">
                                            <fo:block>
                                                <fo:inline font-weight="bold">
                                                    <xsl:text>Is</xsl:text>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell border-style="inset" border-width="2pt" padding="2pt" background-repeat="repeat" display-align="center">
                                            <fo:block>
                                                <fo:inline font-weight="bold">
                                                    <xsl:text>HERE</xsl:text>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                    <xsl:for-each select="/table/tr">
                                        <xsl:variable name="tr51" select="."/>
                                        <fo:table-row>
                                            <fo:table-cell border-style="inset" border-width="2pt" padding="2pt" background-repeat="repeat" display-align="center">
                                                <fo:block>
                                                    <xsl:value-of select="Header"/>
                                                </fo:block>
                                            </fo:table-cell>
                                            <fo:table-cell border-style="inset" border-width="2pt" padding="2pt" background-repeat="repeat" display-align="center">
                                                <fo:block>
                                                    <xsl:value-of select="Is"/>
                                                </fo:block>
                                            </fo:table-cell>
                                            <fo:table-cell border-style="inset" border-width="2pt" padding="2pt" background-repeat="repeat" display-align="center">
                                                <fo:block>
                                                    <xsl:value-of select="HERE"/>
                                                </fo:block>
                                            </fo:table-cell>
                                        </fo:table-row>
                                    </xsl:for-each>
                                </fo:table-body>
                            </fo:table>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <fo:inline font-size="11pt">
                                <xsl:text>A few </xsl:text>
                            </fo:inline>
                            <fo:inline font-size="11pt" color="#FF0000">
                                <xsl:text>colors </xsl:text>
                            </fo:inline>
                            <fo:inline font-size="11pt">
                                <xsl:text>just for </xsl:text>
                            </fo:inline>
                            <fo:inline font-size="11pt" color="#0000FF">
                                <xsl:text>fun</xsl:text>
                            </fo:inline>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <fo:inline font-size="11pt">
                                <xsl:text>this sample should be created Landspace A4</xsl:text>
                            </fo:inline>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <xsl:text>&#xA0;</xsl:text>
                        </fo:block>
                        <fo:block>
                            <fo:inline font-size="12pt">
                                <xsl:text>Sample Doc</xsl:text>
                            </fo:inline>
                            <xsl:text>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;</xsl:text>
                            <fo:inline font-size="12pt">
                                <xsl:text>IDMR</xsl:text>
                            </fo:inline>
                            <xsl:text>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; </xsl:text>
                            <fo:inline font-size="12pt">
                                <xsl:text>&#xA0;&#xA0;April 4</xsl:text>
                            </fo:inline>
                            <fo:inline font-size="8pt">
                                <xsl:text>th</xsl:text>
                            </fo:inline>
                            <fo:inline font-size="12pt">
                                <xsl:text> 2018</xsl:text>
                            </fo:inline>
                        </fo:block>
                    </fo:block>
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>
</xsl:stylesheet>