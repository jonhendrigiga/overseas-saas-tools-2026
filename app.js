function pick(){var cs=document.getElementById('cs').value,tr=document.getElementById('tr').value;
var csr={cn:'美洽（全渠道+AI获客，约40万企业，获线率+40%/人力-80%）',oversea:'美洽(兼顾国内+出海) 或 Zendesk(全球40+语言/原生WhatsApp)',phone:'容联七陌/网易七鱼(呼叫中心基因)',fin:'私有化方案(等保三级+国密+信创)，美洽/智齿私有化版'}[cs];
var trr={doc:'有道(子曰，文档翻译保排版导Word) 或 DeepL',eu:'DeepL(欧语文档格式保留强)',long:'ChatGPT/Claude(上下文最强，翻译+润色一步)',daily:'有道(中英 BLEU~42 高于 Google~38，查词/例句一体) 或 Google(语种最广)'}[tr];
document.getElementById('out').style.display='block';
document.getElementById('out').innerHTML='<div class=rec>客服系统 → '+csr+'</div><div class=rec style="margin-top:10px">AI 翻译 → '+trr+'</div><p><small>选型没有"最好"，按场景取舍；强合规行业务必私有化、机翻文档要人工校审。</small></p>';}
