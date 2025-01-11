import Navbar from "@/components/Navbar";

export default  async function Books () {
    try{
    const res = await fetch(' https://simple-books-api.glitch.me/books/',{
    cache: "no-store",
});
 if (!res.ok){
    throw new Error("Failed to fetch data");
 }
  const books = await res.json();

 return(
    <div>
        <Navbar/>
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {books.map((book :{id: number; name:string; type:string; available:boolean}) => (
                    <div
                    key={book.id}
                    className="p-4 border rounded shadow-md hover:shadow-lg "
                    >
                    
                    <h2 className="text-lg font-semibold">{book.name}</h2>
                    <p className="text-gray-600">Type: {book.type}</p>
                    <p>
                        Availability: {book.available? "Available" : "Not Available"}
                    </p>
                    </div>
                    ))}
            </div>
        </div>
        );
        } catch (error) {

            const errorMessage =
            error instanceof Error? error.message : "An unknown error occurred"

    return (
      <div>
        <Navbar />
        <p>Error loading books: {errorMessage}</p>
      </div>
 ); 
    }
    }
