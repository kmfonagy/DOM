var logo = document.querySelector("#hplogo");
undefined
logo
<img alt=​"Google" height=​"92" id=​"hplogo" src=​"/​images/​branding/​googlelogo/​2x/​googlelogo_color_272x92dp.png" srcset=​"/​images/​branding/​googlelogo/​1x/​googlelogo_color_272x92dp.png 1x, /​images/​branding/​googlelogo/​2x/​googlelogo_color_272x92dp.png 2x" style=​"padding-top:​109px" width=​"272" onload=​"window.lol&&lol()​" data-atf=​"3">​
logo.setAttribute("srcset", "https://dogzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2018/07/siberian-husky-price.jpg");
undefined
logo.style.width = "500px";
"500px"
logo.style.height = "200px";
"200px"
logo.style.border = "2px solid blue";
"2px solid blue"
var links = document.getElementsByTagName("a");
undefined
links
HTMLCollection(56) [a, a, a.gb_P, a.gb_P, a.gb_b.gb_xc, a#gb192.gb_O, a#gb1.gb_O, a#gb8.gb_O, a#gb36.gb_O, a#gb78.gb_O, a#gb5.gb_O, a#gb23.gb_O, a#gb49.gb_O, a#gb24.gb_O, a#gb119.gb_O, a#gb51.gb_O, a#gb31.gb_O, a#gb117.gb_O, a.gb_ua.gb_zg, a.gb_fa.gb_zg, a#gb6.gb_O, a#gb27.gb_O, a#gb25.gb_O, a#gb10.gb_O, a#gb30.gb_O, a#gb53.gb_O, a#gb300.gb_O, a#gb136.gb_O, a#gb265.gb_O, a#gb357.gb_O, a#gb429.gb_O, a#gb338.gb_O, a.gb_ga.gb_sg, a.gb_b, a.gb_b.gb_hb.gb_R, a#sbfblt.duf3.aciXEb, a.NKcBbd, a.Fx4vi, a.Fx4vi, a#fsettl.Fx4vi, a, a, a, a, a, a#dk2qOd, a.Fx4vi, a.Fx4vi, a.gb_Eb.gb_zg, a, a, a.gb_Aa.gb_wg.gbp1.gb_ef.gb_Tb, a.gb_8b.gb_fc, a.gb_lc.gb_ab, a.gb_Aa.gb_tg.gb_ef.gb_Tb, a#gb_71.gb_Aa.gb_xg.gb_Eg.gb_ef.gb_Tb, gb192: a#gb192.gb_O, gb1: a#gb1.gb_O, gb8: a#gb8.gb_O, gb36: a#gb36.gb_O, gb78: a#gb78.gb_O, …]
links.setAttribute()
VM260:1 Uncaught TypeError: links.setAttribute is not a function
    at <anonymous>:1:7
(anonymous) @ VM260:1
for(var i = 0; i < links.length; i++){
    console.log(links[i].textConent)
}
56VM273:2 undefined
undefined
for(var i = 0; i < links.length; i++){
    links[i].style.background = "red";
}
"red"
for(var i = 0; i < links.length; i++){
    links[i].style.border = "1px dashed purple";
    links[i].style.color = "green";
}
"green"
for(var i = 0; i < links.length; i++){
    console.log(links[i].getAttribute("href"));
}
VM574:2 /intl/en/about/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header
VM574:2 https://store.google.com/?utm_source=hp_header&utm_medium=google_oo&utm_campaign=GS100042
VM574:2 https://mail.google.com/mail/?tab=wm
VM574:2 https://www.google.com/imghp?hl=en&tab=wi
VM574:2 https://www.google.com/intl/en/about/products?tab=wh
VM574:2 https://myaccount.google.com/?utm_source=OGB&utm_medium=app
VM574:2 https://www.google.com/webhp?tab=ww
VM574:2 https://maps.google.com/maps?hl=en&tab=wl
VM574:2 https://www.youtube.com/?gl=US
VM574:2 https://play.google.com/?hl=en&tab=w8
VM574:2 https://news.google.com/nwshp?hl=en&tab=wn
VM574:2 https://mail.google.com/mail/?tab=wm
VM574:2 https://drive.google.com/?tab=wo&authuser=0
VM574:2 https://www.google.com/calendar?tab=wc
VM574:2 https://plus.google.com/u/0/?tab=wX
VM574:2 https://translate.google.com/?hl=en&tab=wT
VM574:2 https://photos.google.com/?tab=wq&pageId=none
VM574:2 https://support.google.com/?hl=en&src=1b
VM574:2 #
VM574:2 https://www.google.com/intl/en/about/products?tab=wh
VM574:2 https://www.google.com/shopping?hl=en&source=og&tab=wf
VM574:2 https://www.google.com/finance?tab=we
VM574:2 https://docs.google.com/document/?usp=docs_alc&authuser=0
VM574:2 https://books.google.com/bkshp?hl=en&tab=wp
VM574:2 https://www.blogger.com/?tab=wj
VM574:2 https://contacts.google.com/?hl=en&tab=wC
VM574:2 https://hangouts.google.com/
VM574:2 https://keep.google.com/u/0
VM574:2 https://classroom.google.com/?authuser=0
VM574:2 https://jamboard.google.com/?authuser=0&usp=jam_ald
VM574:2 https://earth.google.com/web/
VM574:2 https://www.google.com/save
VM574:2 https://www.google.com/intl/en/about/products?tab=wh
VM574:2 null
VM574:2 https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com/
VM574:2 #
VM574:2 https://www.google.com/url?q=https://myaccount.google.com/smartlink/privacy-checkup/1%3Futm_source%3Dgoogle%26utm_medium%3Dhpp-desktop-auth%26utm_campaign%3Ddata-privacy-day-19&source=hpp&id=19010557&ct=3&usg=AFQjCNEFXPCkpsEl9iQoRz3XWgNm7xszJQ&sa=X&ved=0ahUKEwiLjevCuZHgAhVp6IMKHZOGADMQ8IcBCAk
VM574:2 https://www.google.com/intl/en_us/policies/privacy/?fg=1
VM574:2 https://www.google.com/intl/en_us/policies/terms/?fg=1
VM574:2 https://www.google.com/preferences?hl=en
VM574:2 https://www.google.com/preferences?hl=en&fg=1
VM574:2 /advanced_search?hl=en&fg=1
VM574:2 //myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&fg=1
VM574:2 //myactivity.google.com/product/search?utm_source=google&hl=en&fg=1
VM574:2 //support.google.com/websearch/?p=ws_results_help&hl=en&fg=1
VM574:2 #
VM574:2 https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
VM574:2 https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
2VM574:2 https://plus.google.com/u/0/me?tab=wX
VM574:2 https://myaccount.google.com/privacypolicy
VM574:2 https://myaccount.google.com/?utm_source=OGB&utm_medium=act
VM574:2 https://www.google.com/webhp?authuser=0
VM574:2 https://myaccount.google.com/brandaccounts?authuser=0&continue=https://www.google.com/&service=https://www.google.com/webhp%3Fauthuser%3D%24authuser
VM574:2 https://accounts.google.com/AddSession?hl=en&continue=https://www.google.com/
VM574:2 https://accounts.google.com/Logout?hl=en&continue=https://www.google.com/&timeStmp=1548711928&secTok=.AG5fkS-hUM2WnYlw9JXcddesgRjNDNxNwA
undefined
for(var i = 0; i < links.length; i++){
    console.log(links[i].textConent);
}
56VM582:2 undefined
undefined
for(var i = 0; i < links.length; i++){
    links[i].setAttribute("href" "www.fonagy.com");
}
VM607:2 Uncaught SyntaxError: missing ) after argument list
for(var i = 0; i < links.length; i++){
    links[i].setAttribute("href", "www.fonagy.com");
}
undefined
for(var i = 0; i < links.length; i++){
    console.log(links[i].textConent);
}
56VM615:2 undefined
undefined
for(var i = 0; i < links.length; i++){
    console.log(links[i].getAttribute("href"));
}
56VM621:2 www.fonagy.com
undefined