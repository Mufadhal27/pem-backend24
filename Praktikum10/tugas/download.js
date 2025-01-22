const persiapan = () => {
    return new Promise((resolve, reject) => {
        const status = true;

        setTimeout(() => {
            if (status) {
                resolve("Persiapan berhasil dilakukan");
            } else {
                reject("Gagal melakukan persiapan");
            }
        }, 1000);
    });
};

const potongSayur = () => {
    return new Promise((resolve, reject) => {
        const status = true;

        setTimeout(() => {
            if (status) {
                resolve("Sayur berhasil dipotong");
            } else {
                reject("Gagal memotong sayur");
            }
        }, 2000);
    });
};

const masakMakanan = () => {
    return new Promise((resolve, reject) => {
        const status = true;

        setTimeout(() => {
            if (status) {
                resolve("Makanan berhasil dimasak");
            } else {
                reject("Gagal memasak makanan");
            }
        }, 4000);
    });
};

module.exports = { persiapan, potongSayur, masakMakanan };
