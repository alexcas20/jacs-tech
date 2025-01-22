
const favorites = [
    {id: 1, name: "thing 1", price: 550.2},
    {id: 3, name: "thing 2", price: 550.2},
    {id: 4, name: "thing 4", price: 550.2},

]


export const Favorites = () => {
  return (
    <article className="container mx-auto min-h-screen">

        <div className="mb-14">
        <h3 className="text-3xl font-bold pt-12">My Favorites</h3>
        <hr className="border border-b-black w-[40%] my-2" />
        </div>
       
      
      <div className="flex gap-4 flex-wrap justify-center mb-10">
      {
        favorites.map(fav => 
            <div key={fav.id} className="bg-slate-200 w-[350px] h-[400px] p-6">
                <div className="bg-slate-50 rounded-full h-10">
                    Hola
                </div>
                <div>
                    <span>{fav.name}</span>
                    <span>{fav.price}</span>
                </div>
            </div>
        )
      }
      </div>
      


    </article>
  );
};
