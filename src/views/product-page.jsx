import Navbar from "../components/navbar";
import ProductImage from "../components/productImage";

const ProductPage = () => {
    return (
        <>
            <Navbar />
            <div class="container m-5 p-1">
                <div class="row justify-content-around mt-5">
                    <div class="containerImage col-5 container">
                        <ProductImage />
                        <div class="rating mt-3 ">
                            <span>rating 4.8 <i class="fa-solid fa-star"></i></span>
                        </div>
                    </div>
                    <div class="rightContainer col-5 mt-5 container">
                        <div class="mt-3" >
                            <div class="row">
                                <div class="col-8">
                                    <p class="fs-4 fw-semibold">Fotografía Astro</p>
                                </div>
                                <div class="col-4">
                                    <p class="float-end m-2"><i class="fa-regular fa-share-from-square"></i></p>
                                    <p class="float-end m-2"><i class="fa-regular fa-bookmark"></i></p>
                                    <p class="float-end m-2"><i class="fa-solid fa-heart"></i>109</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="price mt-5 col-6 fs-1 fw-semibold">
                                <p>$ 100,00 </p>
                            </div>
                            <div class="reviews float-end col-3 mt-5"><p><i class="fa-regular fa-comment-dots"></i> 67 Reviews</p></div>
                        </div>
                        <div class="btn-cart mt-5">
                            <button class="btn-cart-color rounded-pill"><i class="fa-solid fa-cart-shopping"></i>  Agregar al carrito</button>
                        </div>
                        <div class="shippingPolicies mt-5">
                            <p><i class="fa-solid fa-truck"></i> Envío gratis desde $200,00</p>
                        </div>
                        <div class="shippingPolicies mt-2">
                            <p><i class="fa-solid fa-cart-shopping"></i> Términos y condiciones</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;