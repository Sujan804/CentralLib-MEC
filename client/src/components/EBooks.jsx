import React from "react";
const eBooks = () => {
  // const [book, setBook] = useState(null);

  // useEffect(() => {
  //   const fetchBook = async () => {
  //     const result = await axios.get(`http://my-server.com/books/${bookId}`);
  //     setBook(result.data);
  //   };
  //   fetchBook();
  // }, []);

  // if (!book) {
  //   return <div>Loading...</div>;
  // }
  return (
    <section className="min-h-screen pt-16 text-center">
      <h1 className="text-red-900">E-Books Under construction</h1>
      <img
        src="http://localhost:5000/images/image-1673080925854-659699998"
        alt="iage"
      />
    </section>
  );
};

export default eBooks;
