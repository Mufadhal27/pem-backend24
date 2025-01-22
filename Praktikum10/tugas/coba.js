const { persiapan, potongSayur, masakMakanan } = require("./praktek.js");

const main = async () => {
    try {
        const persiapanResult = await persiapan();
        console.log(persiapanResult);

        const potongSayurResult = await potongSayur();
        console.log(potongSayurResult);

        const masakResult = await masakMakanan();
        console.log(masakResult);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
};

main();
