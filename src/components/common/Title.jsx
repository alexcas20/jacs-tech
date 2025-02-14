
export const Title = ({title}) => {
  return (
    <div className="py-2 px-8 pt-6 md:pt-10 lg:pt-3 flex flex-col items-center md:mb-8">
            <h2 className="text-3xl capitalize md:text-[40px] pl-2 my-2 border-l-4  font-sans font-bold border-blue-700  text-slate-950">{title}</h2>
            <hr className="w-[70%] md:w-[15%] my-2 md:hidden " />
          </div>
  )
}
