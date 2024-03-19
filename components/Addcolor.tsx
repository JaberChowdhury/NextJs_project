"use client";
import { MdAddCircleOutline } from "react-icons/md";
import { GrRadialSelected } from "react-icons/gr";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  colorstoreSelector,
  addColor,
} from "@/lib/features/colorstore/colorstoreSlice";

interface propsType {
  data: {
    color: string;
    id: string;
  };
}

const Addcolor = ({ data }: propsType) => {
  const dispatch = useAppDispatch();
  const { colors } = useAppSelector(colorstoreSelector);

  return (
    <div>
      <MdAddCircleOutline
        onClick={() => dispatch(addColor({ color: data }))}
        className="text-2xl mr-2"
      />
      <GrRadialSelected className="text-2xl mr-2 hidden" />
    </div>
  );
};

export default Addcolor;
