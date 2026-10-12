import { ServiceItem, BeforeAfterCase, ReviewItem, PickupArea, FaqItem } from '../types';

export const BRAND_INFO = {
  name: 'PANPIN SHOE TREATMENT',
  shortName: 'PANPIN',
  tagline: 'YOUR SHOES DESERVE A SECOND LIFE.',
  headlineHero: 'GRATIS ANTAR & JEMPUT SEPATU KAMU!',
  subHero:
    'Balik bersih, fresh, siap dipakai lagi! Mulai dari cleaning, repair, repaint, unyellowing sampai treatment khusus bahan suede. Berlaku untuk area Purwokerto dan sekitarnya.',
  estYear: 2015,
  location: 'Jl. HR Bunyamin, depan UNSOED, Purwokerto Utara, Banyumas',
  mapsUrl: 'https://maps.app.goo.gl/DH9ReW8W5n8ecmRZA',
  mapsEmbedQuery: 'PANPIN+SHOE+TREATMENT+Purwokerto',
  operatingHours: 'Setiap hari, 09.00 – 21.00 WIB',
  phoneDisplay: '0857-4062-6298',
  phoneRaw: '6285740626298',
  instagramHandle: '@panpinst_pwt',
  instagramUrl: 'https://www.instagram.com/panpinst_pwt/',
  ratingScore: '4.6',
  totalReviews: '616',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cleaning',
    number: '01',
    title: 'Shoe Cleaning',
    shortDesc: 'Pembersihan mendalam untuk berbagai jenis bahan sepatu tanpa merusak material.',
    fullDesc:
      'Layanan pembersihan menyeluruh menggunakan teknik micro-brush dan formula pembersih premium khusus sepatu. Aman untuk canvas, suede, leather, knit, hingga nubuck.',
    estimatedDuration: 'Fast Clean: 1–2 Hari · Deep Clean: 3–4 Hari',
    inclusions: [
      'Pembersihan Upper, Midsole & Outsole',
      'Pembersihan Insole & Tali Sepatu (Laces)',
      'Formula anti-bakteri & penetral bau apek',
      'Pengeringan khusus indoor tanpa dijemur terik matahari',
      'Finishing shoe perfume premium',
    ],
    recommendedFor: 'Sneakers harian, sepatu lari, sepatu kantor, hingga sepatu kanvas kotor berat.',
    popular: true,
  },
  {
    id: 'repair',
    number: '02',
    title: 'Shoe Repair & Reglue',
    shortDesc: 'Rekat ulang sol yang lepas (reglue), jahitan sol rapi, dan perbaikan lining.',
    fullDesc:
      'Sol sepatu copot atau mangap? Kami merekatkan kembali dengan lem perekat standar pabrik dan proses press bertahap agar daya rekat tahan lama.',
    estimatedDuration: '3–5 Hari Kerja (Tergantung tingkat kerusakan)',
    inclusions: [
      'Pembersihan residu lem lama hingga tuntas',
      'Aplikasi adhesive primer & industrial shoe glue',
      'Press sol bertahap untuk daya rekat maksimal',
      'Jahit sol rapi (opsional untuk kebutuhan ekstra kuat)',
      'Perbaikan heel lining / bantalan tumit yang robek',
    ],
    recommendedFor: 'Sepatu dengan sol copot, sepatu basket/futsal yang sering dipakai gesekan, sneakers vintage.',
  },
  {
    id: 'repaint',
    number: '03',
    title: 'Repaint & Recolor',
    shortDesc: 'Restorasi warna pudar atau ubah warna baru dengan cat khusus sepatu anti retak.',
    fullDesc:
      'Kembalikan warna pekat sepatu yang kusam akibat sinar matahari atau pemakaian lama. Menggunakan formula cat elastis yang meresap ke serat material tanpa membuatnya kaku atau pecah-pecah.',
    estimatedDuration: '4–7 Hari Kerja (Proses layering & curing presisi)',
    inclusions: [
      'Deep cleaning awal untuk membuka pori bahan',
      'Deglazing & persiapan permukaan (khusus leather)',
      'Layering cat fleksibel multi-lapis',
      'Finishing matte / gloss seal protectant anti air',
      'Garansi daya rekat cat awal',
    ],
    recommendedFor: 'Sneakers suede/kanvas memudar, sepatu kulit yang lecet/kusam, atau custom recolor warna baru.',
  },
  {
    id: 'unyellowing',
    number: '04',
    title: 'Midsole Unyellowing & Whitening',
    shortDesc: 'Penghilangan efek oksidasi kuning pada midsole karet dan sol putih agar cerah kembali.',
    fullDesc:
      'Sol putih sepatu yang menguning karena proses oksidasi alami dihilangkan menggunakan formula deoksidasi khusus serta penyinaran terkontrol hingga kembali cerah alami.',
    estimatedDuration: '2–4 Hari Kerja (Disesuaikan ketebalan oksidasi)',
    inclusions: [
      'Deep cleaning sol sebelum deoksidasi',
      'Aplikasi pasta de-yellowing formula aktif',
      'Proses exposure bertahap hingga rona kuning hilang',
      'Aplikasi pelindung midsole pasca-treatment',
      'Aman untuk karet sol asli tanpa merusak elastisitas',
    ],
    recommendedFor: 'Nike Air Force 1, Adidas Superstar, Stan Smith, Vans, Converse, dan sol putih lainnya.',
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-unyellowing',
    title: 'Unyellowing & Whitening Split',
    category: 'unyellowing',
    categoryLabel: 'Unyellowing & Whitening',
    shoeType: 'White Court Sneaker Sole',
    description:
      'Kenali bedanya sebelum salah treatment! Oksidasi kuning parah pada sol dihilangkan dengan deoksidasi presisi tanpa merusak struktur karet aslinya.',
    treatmentDetails: [
      'De-oxidation pasta aktif bertahap',
      'Penetral rona kuning oksidasi',
      'Midsole moisture & whitening protectant',
    ],
    beforeImage: `${import.meta.env.BASE_URL}images/before_after_dirty_1791733186917.jpg`,
    afterImage: `${import.meta.env.BASE_URL}images/white_unyellowing_comparison_1791769064680.jpg`,
  },
  {
    id: 'case-white-sneaker',
    title: 'Nike Air Force 1 Deep Clean',
    category: 'cleaning',
    categoryLabel: 'Deep Clean & Midsole Care',
    shoeType: 'White Leather Sneaker',
    description:
      'Kondisi awal terkena lumpur pekat, noda tanah jalanan basah, dan noda kehitaman pada jahitan upper. Balik bersih, fresh, siap dipakai lagi!',
    treatmentDetails: [
      'Pembersihan micro-foam upper leather',
      'Pemutihan midsole & deep scrub outsole',
      'Pencucian tali & de-odorizing interior',
      'Leather balm nutrition finishing',
    ],
    beforeImage: `${import.meta.env.BASE_URL}images/before_after_dirty_1791733186917.jpg`,
    afterImage: `${import.meta.env.BASE_URL}images/before_after_clean_1791733199391.jpg`,
  },
  {
    id: 'case-suede-care',
    title: 'Special Suede Nap Revive',
    category: 'suede',
    categoryLabel: 'Special Suede Treatment',
    shoeType: 'Delicate Suede & Nubuck Shoes',
    description:
      'Bahan suede sangat sensitif terhadap air berlebih. Di PANPIN, kami menggunakan sikat crepe karet ganda dan dry cleaning foam agar serat nap suede tetap lembut dan tidak rontok.',
    treatmentDetails: [
      'Dry-cleansing khusus serat suede & nubuck',
      'Sikat dua sisi crepe rubber & brass brush',
      'Pengangkatan noda tanpa membuat tekstur kaku',
      'Finishing spray pelindung anti-debu',
    ],
    beforeImage: `${import.meta.env.BASE_URL}images/suede_brush_care_1791761368510.jpg`,
    afterImage: `${import.meta.env.BASE_URL}images/before_after_clean_1791733199391.jpg`,
  },
  {
    id: 'case-reglue',
    title: 'Full Sol Reglue & Alignment',
    category: 'repair',
    categoryLabel: 'Sole Repair & Reglue',
    shoeType: 'Daily Lifestyle Sneaker',
    description:
      'Sol bagian depan hingga samping sudah terkelupas dan lepas total. Dibersihkan dari residu lem getas, direkatkan kembali dengan lem polimer industri standar pabrik.',
    treatmentDetails: [
      'Scraping residu lem lama',
      'Heat activation bond primer',
      'Industrial pressure clamping',
    ],
    beforeImage: `${import.meta.env.BASE_URL}images/before_after_dirty_1791733186917.jpg`,
    afterImage: `${import.meta.env.BASE_URL}images/before_after_clean_1791733199391.jpg`,
  },
];

export const PICKUP_AREAS: PickupArea[] = [
  {
    name: 'Purwokerto Utara (Prioritas Depan UNSOED)',
    subdistricts: ['Grendeng', 'Bancarkembar', 'Karangwangkal', 'Pabuwaran', 'Purwanegara', 'Sumampir'],
    status: 'Gratis Antar-Jemput',
    statusType: 'free',
    etaNotes: 'Dekat workshop, pickup cepat hari yang sama.',
  },
  {
    name: 'Purwokerto Timur',
    subdistricts: ['Kranji', 'Mersi', 'Arcawinangun', 'Purwokerto Wetan', 'Sokanegara'],
    status: 'Gratis Antar-Jemput',
    statusType: 'free',
    etaNotes: 'Jadwal pickup setiap hari 10.00 – 19.00 WIB.',
  },
  {
    name: 'Purwokerto Barat',
    subdistricts: ['Kober', 'Rejasari', 'Karanglewas Lor', 'Kedungwulan', 'Pasirmuncang'],
    status: 'Gratis Antar-Jemput',
    statusType: 'free',
    etaNotes: 'Jadwal pickup harian konfirmasi via WhatsApp.',
  },
  {
    name: 'Purwokerto Selatan',
    subdistricts: ['Karangpucung', 'Tanjung', 'Berkoh', 'Teluk', 'Purwokerto Kulon'],
    status: 'Gratis Antar-Jemput',
    statusType: 'free',
    etaNotes: 'Gratis antar-jemput sesuai ketentuan minimal order/rute harian.',
  },
  {
    name: 'Kembaran & Sekitarnya (Area UMP)',
    subdistricts: ['Dukuhwaluh', 'Ledug', 'Pliken', 'Bojongsari'],
    status: 'Gratis Antar-Jemput',
    statusType: 'free',
    etaNotes: 'Rute kampus UMP & jalan raya Dukuhwaluh tercover rutin.',
  },
  {
    name: 'Sokaraja, Baturraden & Sumbang',
    subdistricts: ['Sokaraja Tengah', 'Sokaraja Kulon', 'Rempoah', 'Ketenger', 'Tambaksogra'],
    status: 'Terjangkau',
    statusType: 'available',
    etaNotes: 'Bisa dijemput dengan konfirmasi jadwal rute harian driver.',
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-highlight',
    author: 'Customer Anonim (@instagram)',
    role: 'Pengunjung Instagram Viral',
    rating: 5,
    date: 'Viral di Reels',
    treatment: 'Deep Clean Sepatu Suede',
    content:
      'Pelayanannya ramah, staffnya juga baik, hasilnya juga oke banget. Tapi males ah soalnya dulu aku pernah kesini sama mantan 😭 Tapi tetep kasih bintang 5 karena sepatuku jadi kayak baru!',
    verified: true,
    highlight: true,
  },
  {
    id: 'rev-1',
    author: 'Dimas Aditya',
    role: 'Mahasiswa UNSOED',
    rating: 5,
    date: '2 minggu lalu',
    treatment: 'Deep Clean & Midsole Care',
    content:
      'Solusi anak kos yang mager keluar! Sepatu Vans dan Jordan saya dijemput tepat waktu di kosan Grendeng. Pas balik udah bersih kinclong, wangi banget, dan noda kopi di upper kanvas ilang total. 10/10 rekomen!',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Rizky Pratama',
    role: 'Sneaker Collector Purwokerto',
    rating: 5,
    date: '1 bulan lalu',
    treatment: 'Reglue Sol & Midsole Unyellowing',
    content:
      'Air Force 1 yang midsolenya udah kuning bertahun-tahun sekarang putih lagi kayak baru beli di toko. Lem solnya juga dipress rapi banget nggak belepotan. Tempat cuci sepatu paling terpercaya di Purwokerto sejak saya kuliah 2017.',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Sarah Nuraini',
    role: 'Pegawai Kantoran',
    rating: 5,
    date: '3 minggu lalu',
    treatment: 'Leather Care & Fast Clean',
    content:
      'Fast respond banget admin WA-nya. Sepatu kerja pantofel kulit dan heels selesai tepat waktu dan langsung diantar ke rumah. Hasil semirnya rapi dan kulitnya jadi lentur kembali.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Fajar Hidayat',
    role: 'Local Runner',
    rating: 5,
    date: '1 bulan lalu',
    treatment: 'Deep Clean Running Shoes',
    content:
      'Habis ikut event lari becek-becekan, sepatu kotor parah langsung serahin ke PANPIN. Bahan knit mesh-nya bersih tanpa ada yang brudul atau melar. Pelayanan jemputnya sangat membantu!',
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'Bagas Wicaksono',
    role: 'Alumni UNSOED',
    rating: 5,
    date: '2 bulan lalu',
    treatment: 'Repaint Full Black Sneakers',
    content:
      'Repaint warna hitamnya solid, elastis dan nggak kaku saat ditekuk jalan. Lokasinya strategis banget pas di seberang kampus UNSOED. Sukses terus buat PANPIN!',
    verified: true,
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'Berapa kisaran harga treatment sepatu di PANPIN?',
    answer:
      'Harga disesuaikan dengan jenis bahan (canvas, suede, leather, dll) dan kondisi sepatu (kotor ringan, noda membandel, sol lepas, atau repaint). Anda bisa mengirimkan foto sepatu langsung ke WhatsApp kami untuk mendapatkan estimasi harga transparan tanpa biaya komitmen.',
    category: 'Biaya',
  },
  {
    question: 'Bagaimana cara menggunakan layanan Gratis Antar-Jemput?',
    answer:
      'Sangat mudah! Cukup hubungi kami via WhatsApp di 0857-4062-6298, kirimkan lokasi (share location) Anda di Purwokerto atau sekitarnya beserta foto sepatu. Tim kurir PANPIN akan mengatur jadwal penjemputan dan mengantarkannya kembali setelah selesai.',
    category: 'Antar-Jemput',
  },
  {
    question: 'Berapa lama durasi pengerjaan cuci dan perbaikan?',
    answer:
      'Untuk Fast Clean membutuhkan waktu 1–2 hari kerja, Deep Clean 3–4 hari kerja. Untuk layanan restorasi khusus seperti Unyellowing, Sole Reglue, dan Repaint berkisar 3–7 hari kerja karena membutuhkan proses pengeringan bertahap dan curing agar hasil maksimal dan awet.',
    category: 'Durasi',
  },
  {
    question: 'Apakah bahan sepatu premium seperti Suede atau Kulit Asli aman dicuci?',
    answer:
      'Sangat aman! Seperti yang sering kami edukasikan di Instagram, kami menggunakan teknik dry cleaning khusus dengan sikat bulu kuda asli (horsehair brush) serta crepe rubber khusus suede tanpa merendam air agar nap suede tidak kaku atau rontok.',
    category: 'Keamanan',
  },
  {
    question: 'Apakah hasil lem (reglue) sol sepatu ada garansinya?',
    answer:
      'Ya, kami memberikan garansi rekat untuk pengerjaan sole reglue. Jika dalam masa garansi pemakaian normal sol kembali merenggang, kami akan lakukan re-treat gratis.',
    category: 'Garansi',
  },
  {
    question: 'Apakah saya bisa datang langsung tanpa reservasi?',
    answer:
      'Tentu bisa! Workshop PANPIN buka setiap hari dari pukul 09.00 sampai 21.00 WIB di Jl. HR Bunyamin, tepat di depan kampus UNSOED, Purwokerto Utara. Anda bisa drop sepatu kapan saja saat jam operasional.',
    category: 'Lokasi',
  },
];
