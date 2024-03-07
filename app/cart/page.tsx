import tea from "../../public/images/ashwagandha-elixir.png";

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
        Shopping Cart
      </h1>

      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"></div>
      <section id="cart-items" className=" mb-3 md:mb-6">
        <div className="lg:col-span-7"></div>
        <CartItems />
        {/* CartItems */}
      </section>
      <section id="cart-summary">
        {/* CartSummary */}
        <CartSummary />
      </section>
    </main>
  );
}

function CartItemsEmpty() {
  return (
    <div className="container mx-auto bg-slate-50 h-96 flex flex-col justify-center items-center">
      <div className="font-extralight text-xl">
        You Have No Items in Shopping Cart.
      </div>
    </div>
  );
}

function CartItems() {
  return (
    <div className="container mx-auto bg-slate-50 py-2">
      <div className="text-center font-extralight text-xl">List of Items</div>
    </div>
  );
}

function CartItem() {
  return (
    <article className="flex flex-row gap-2 items-center justify-start">
      <div>
        {/*  
        <Image src={tea} alt='product' width={100} height={100} />
        */}
      </div>
      <div className="">
        <h2 className="font-semibold">Product Name</h2>
      </div>
    </article>
  );
}

function CartSummary() {
  return (
    <div className="container mx-auto bg-slate-50 py-2">
      <div className="text-center font-extralight text-2xl">Cart Summary</div>
    </div>
  );
}
