function pick(){var cs=document.getElementById('cs').value,tr=document.getElementById('tr').value;
var csr={cn:'美洽（全通路+AI 獲客，約40萬企業）',oversea:'美洽(中國+出海) 或 Zendesk(40+語/原生 WhatsApp)',phone:'容聯七陌(客服中心基因)',fin:'地端部署(等保三級+國密)，美洽/智齒私有版'}[cs];
var trr={doc:'有道(保排版匯出 Word) 或 DeepL',eu:'DeepL(歐語文件排版強)',long:'ChatGPT/Claude(語境最強)',daily:'有道(中英 BLEU~42 高於 Google~38) 或 Google(語種最廣)'}[tr];
document.getElementById('out').style.display='block';document.getElementById('out').innerHTML='<div class=rec>客服 → '+csr+'</div><div class=rec style="margin-top:10px">翻譯 → '+trr+'</div>';}