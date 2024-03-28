import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface propsType {
  data: Surah[];
}

const Home = ({ data }: propsType) => {
  return (
    <>
      <div>
        {data?.map((surah: Surah, id: number) => {
          return (
            <Card key={id} className="my-2">
              <CardHeader>
                <CardTitle>
                  [{id + 1}] Surah {surah.englishName}
                </CardTitle>
                <CardTitle>{surah.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Translation : {surah.englishNameTranslation}
                </CardDescription>
                <CardDescription>Ayah : {surah.numberOfAyahs}</CardDescription>
                <CardDescription>
                  Revelation Type : {surah.revelationType}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={`/surah/${surah.number}`}>
                  <Button> Read full </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Home;
