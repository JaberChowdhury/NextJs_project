import Ayahs from "@/components/Ayahs";

export async function generateStaticParams() {
  let data = [];
  for (let i = 0; i < 114; i++) {
    data.push({
      id: (i + 1).toString(),
    });
  }
  return data;
}

const getSurah = async (id:string) => {
  const res = await fetch(
    `https://quranenc.com/api/v1/translation/sura/english_saheeh/${id}`,
  );
  const surah = await res.json();
  return surah;
};

interface propsType {
  params : {
    id : string
  }
}

const Surah = async ({ params }:propsType) => {
  const data = await getSurah(params.id);

  return (
    <div>
      <div>Surah</div>
      <Ayahs data={data.result} name="name" />
    </div>
  );
};

export default Surah;
