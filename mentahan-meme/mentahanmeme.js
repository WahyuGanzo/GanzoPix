// Image Data - Upin Ipin
const images = [
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006041/Two_guys_on_a_bus_eztvv5.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006041/Two_guys_on_a_bus_eztvv5.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006041/winniethepooh_rmnmnf.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006041/winniethepooh_rmnmnf.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006041/yesno_y9p8s3.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006041/yesno_y9p8s3.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006041/Weak_vs_Strong_Spongebob_czkhtg.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006041/Weak_vs_Strong_Spongebob_czkhtg.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006040/Unsettled_Tom_jixoru.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006040/Unsettled_Tom_jixoru.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006035/thisisfine_uvvhcc.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006035/thisisfine_uvvhcc.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006034/tunggudulu_wd0dgi.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006034/tunggudulu_wd0dgi.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006029/spiderman_pointing_at_spiderman_t8lof5.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006029/spiderman_pointing_at_spiderman_t8lof5.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006030/the_office_handshake_cxtwmr.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006030/the_office_handshake_cxtwmr.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006029/Squidward_chair_dg7dfq.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006029/Squidward_chair_dg7dfq.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006028/Spongebob_Burning_Paper_yexp5j.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006028/Spongebob_Burning_Paper_yexp5j.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006029/sweating_bullets_epasig.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006029/sweating_bullets_epasig.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006028/Teacher_s_Copy_wjkrdg.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006028/Teacher_s_Copy_wjkrdg.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006026/solid_mibzqp.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006026/solid_mibzqp.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006026/Spider_Man_Triple_ufsjpp.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006026/Spider_Man_Triple_ufsjpp.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006025/sepedastupid_a1rvsn.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006025/sepedastupid_a1rvsn.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006025/Scooby_doo_mask_reveal_l6qwuv.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006025/Scooby_doo_mask_reveal_l6qwuv.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006023/rapat_lodkml.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006023/rapat_lodkml.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006023/Soyjak_Pointing_ggscpm.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006023/Soyjak_Pointing_ggscpm.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006017/nagakepalatiga_zzomg9.png", 
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006017/nagakepalatiga_zzomg9.png", 
        downloadLink: ""
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006016/nontonapatuh_cwiigy.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006016/nontonapatuh_cwiigy.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006017/priatuasenyum_wm7y06.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006017/priatuasenyum_wm7y06.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006015/puragaliat_ymuyd9.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006015/puragaliat_ymuyd9.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006014/pinjamduluseratus_elhpli.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006014/pinjamduluseratus_elhpli.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006013/melirik_wthalb.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006013/melirik_wthalb.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006012/pikachu_ataomh.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006012/pikachu_ataomh.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006011/milihtombol_yoiyrv.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006011/milihtombol_yoiyrv.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006010/kucingsinis_but3rp.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006010/kucingsinis_but3rp.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006007/Jim_Halpert_Explains_onkgd0.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006007/Jim_Halpert_Explains_onkgd0.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006010/lihatrudy_zlojxi.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006010/lihatrudy_zlojxi.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006007/kalmpanik_kr4g2u.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006007/kalmpanik_kr4g2u.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006006/jadigini_ptzjdb.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006006/jadigini_ptzjdb.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006005/isleep_dfs3nj.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006005/isleep_dfs3nj.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006005/ightimmaheadout_lxcw9d.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006005/ightimmaheadout_lxcw9d.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006005/just_a_chill_guy_mochgj.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006005/just_a_chill_guy_mochgj.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006004/iagfbvie_ucsltd.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736006004/iagfbvie_ucsltd.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005897/Grant_Gustin_over_grave_rruiom.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005897/Grant_Gustin_over_grave_rruiom.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005896/Gus_Fring_we_are_not_the_same_wrmytf.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005896/Gus_Fring_we_are_not_the_same_wrmytf.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005896/hmmmzz_yep2bw.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005896/hmmmzz_yep2bw.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005897/hahh_orjoso.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005897/hahh_orjoso.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005892/draw25_bzymxs.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005892/draw25_bzymxs.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005892/doggg_tjbwrt.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005892/doggg_tjbwrt.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005893/Empty_Stonks_sry6hv.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005893/Empty_Stonks_sry6hv.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005890/diluarnalar_xh1da1.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005890/diluarnalar_xh1da1.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005891/drowning_kid_in_the_pool_otypv9.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005891/drowning_kid_in_the_pool_otypv9.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005889/Disappointed_Black_Guy_u0l9lc.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005889/Disappointed_Black_Guy_u0l9lc.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005886/Bugs_bunny_communist_dtauit.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005886/Bugs_bunny_communist_dtauit.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005887/Brain_Before_Sleep_yljhxr.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005887/Brain_Before_Sleep_yljhxr.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005886/belok_y3yo6h.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005886/belok_y3yo6h.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005886/changemymind_w58zsh.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005886/changemymind_w58zsh.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005886/Crying_cat_m6npj4.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005886/Crying_cat_m6npj4.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005884/batmanstory_o4btm2.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005884/batmanstory_o4btm2.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005883/Both_Buttons_Pressed_r9id85.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005883/Both_Buttons_Pressed_r9id85.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005882/Black_guy_hiding_behind_tree_merwnz.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005882/Black_guy_hiding_behind_tree_merwnz.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005881/bluebutton_u5fioh.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005881/bluebutton_u5fioh.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005881/besmart_mqf7xp.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005881/besmart_mqf7xp.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005879/ayamspongebob_qpnntf.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005879/ayamspongebob_qpnntf.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005879/badut_aiu1jl.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005879/badut_aiu1jl.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005878/angsaaa_qbwcjv.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005878/angsaaa_qbwcjv.png"
    },
    {
        url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005877/asarhwh_nqocpp.png", 
        downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736005877/asarhwh_nqocpp.png"
    },
    {
        url: "../asset/lagiupload.jpg", 
        downloadLink: ""
    },
];



// Function to create image cards - Upin Ipin
function createImageCards() {
    const gallery = document.getElementById('mentahanmeme');
    
    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = 'Image';
        img.addEventListener('click', () => {
            window.location.href = image.downloadLink;
        });

        card.appendChild(img);
        gallery.appendChild(card);
    });
}

// Initialize gallery on page load
window.onload = createImageCards;
