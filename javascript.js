function submitOrder() {
    let brand = document.getElementById("brand").value;
    let location = document.getElementById("location").value;
    let schedule = document.getElementById("schedule").value;

    if (!brand || !location || !schedule) {
        alert("Harap isi semua bidang sebelum memesan.");
        return;
    }

    let message = `Halo, saya ingin memesan layanan gurah mesin.\n\nNama Merek Mobil: ${brand}\nAlamat Lokasi: ${location}\nJadwal Layanan: ${schedule}`;
    let whatsappUrl = `https://wa.me/6288220211486?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
}
