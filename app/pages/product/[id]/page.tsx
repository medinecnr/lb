
import { useRouter } from 'next/router';
import { products } from '@/components/items/SUVurunler';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;  
  if (!id) return <div>Yükleniyor...</div>;

  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Ürün bulunamadı!</div>;  
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <div className="flex gap-6 mt-6">
        <div className="w-1/3">
          <img src={product.imageUrl} alt={product.title} className="w-full" />
        </div>
        <div className="w-2/3">
          <p>{product.description}</p>
          <p className="text-lg font-semibold">{product.price} ₺</p>
          {product.discount && (
            <p className="text-red-600">İndirim: %{product.discount}</p>
          )}
          {product.tamir && (
            <p className="text-yellow-600">Tamir: Evet</p>
          )}
          <button className="bg-[#FFB45F] text-white py-2 px-4 rounded mt-4">
            SEPETE EKLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
