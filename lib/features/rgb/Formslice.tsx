"use client";

const Formslice = () => {
  return (
    <div>
      <div>Formslice</div>
      <div>
        <form>
          <input
            onChange={}
            type="range"
            min={0}
            max="100"
            value="40"
            className="range range-error"
          />
        </form>
      </div>
    </div>
  );
};

export default Formslice;
