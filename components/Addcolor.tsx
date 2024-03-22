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

  const filtered_color = colors.filter((color) => {
    return color.color === data.color;
  });

  return (
    <div>
      {filtered_color.length > 0 ? (
        <GrRadialSelected className="text-2xl mr-2 text-green-400" />
      ) : (
        <MdAddCircleOutline
          onClick={() => dispatch(addColor({ color: data }))}
          className="text-2xl mr-2"
        />
      )}
    </div>
  );
};

export default Addcolor;
