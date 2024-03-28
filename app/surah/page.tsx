import Surahlist from "@/components/Surahlist";

const Surah = async () => {
  // const res = await fetch("https://quranenc.com/api/v1/translation/sura/english_saheeh")
  const res = await fetch("https://api.alquran.cloud/v1/surah");
  const surah = await res.json();
  return (
    <div>
      <div>Surah</div>
      <Surahlist data={surah.data} />
    </div>
  );
};

export default Surah;
