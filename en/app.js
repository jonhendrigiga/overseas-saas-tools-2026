function pick(){var cs=document.getElementById('cs').value,tr=document.getElementById('tr').value;
var csr={cn:'Meiqia (omni-channel + AI lead-gen, ~400k firms)',oversea:'Meiqia (China+overseas) or Zendesk (40+ langs, native WhatsApp)',phone:'Ronglian/Qiyu (call-center DNA)',fin:'On-prem (grade-3 security + crypto), Meiqia/Zhichi private edition'}[cs];
var trr={doc:'Youdao (keep layout, export Word) or DeepL',eu:'DeepL (European docs, layout)',long:'ChatGPT/Claude (best context, translate+polish)',daily:'Youdao (zh-en BLEU ~42 vs Google ~38) or Google (most languages)'}[tr];
document.getElementById('out').style.display='block';
document.getElementById('out').innerHTML='<div class=rec>Live chat -> '+csr+'</div><div class=rec style="margin-top:10px">Translation -> '+trr+'</div>';}