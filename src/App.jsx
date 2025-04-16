
import './App.css'

function App() {
 
  return (
    <>
    <div classNameName="container">
     {/* Header */}
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
        <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC"}}></i>
        <span className='ms-2 fs-2'>bookstore</span>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 ">Home</a></li>
        <li><a href="#" className="nav-link px-2">Features</a></li>
        <li><a href="#" className="nav-link px-2">Team</a></li>
        <li><a href="#" className="nav-link px-2">Contact</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Register</button>
      </div>
    </header>
   {/* hero */}
   <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Border hero with cropped image and shadows</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="https://picsum.photos/720/600" alt="" width="720"/>
      </div>
    </div>
  </div>
  {/* produk list */}
  <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Best Seller</h1>
        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" className="btn btn-primary my-2 m-2">Views</a>
          <a href="#" className="btn btn-secondary my-2">Other Book</a>
        </p>
      </div>
    </div>
  </section>

  <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <div className="col">
          <div className="card shadow-sm">
            <img src="https://marketplace.canva.com/EAGEJ4_mOgk/1/0/1003w/canva-biru-hijau-ilustrasi-ceria-sampul-buku-cinta-yang-mekar-0yTjY5Sf4Og.jpg"></img>
            <div className="card-body">
              <p className="card-text">Cinta yang Mekar</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="https://marketplace.canva.com/EAFlrO1oBtI/1/0/251w/canva-biru-pastel-hangat-minimalist-cerita-cinta-romantis-sampul-buku-690e9C21PgA.jpg"></img>
            <div className="card-body">
              <p className="card-text">Ketika Angin Berbisik</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="https://marketplace.canva.com/EAFaKUUnzls/1/0/1024w/canva-biru-illustrasi-pergi-untuk-kembali-ebook-cover-MBu9Hf9KuD4.jpg"></img>
            <div className="card-body">
              <p className="card-text">Pergi Untuk Kembali</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img src="https://marketplace.canva.com/EAF9TBFPVYo/1/0/1003w/canva-putih-abu-abu-modern-estetik-cerita-cinta-romantis-sampul-buku-pbJ9SMpitig.jpg"></img>
            <div className="card-body">
              <p className="card-text">Kelana Waktu</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="https://marketplace.canva.com/EAGENUU6PyM/1/0/1003w/canva-biru-langit-novel-book-cover-2e4igNxUIcY.jpg"></img>
            <div className="card-body">
              <p className="card-text">Kala Itu Langit Biru</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="https://marketplace.canva.com/EAFYolO7r-Q/2/0/1003w/canva-merah-muda-sederhana-ilustrasi-romansa-sampul-buku-novel-8LtslVDBl7U.jpg"></img>
            <div className="card-body">
              <p className="card-text">Dalamnya Lubuk Hati</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/* footer */}
<div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p className="text-center text-body-secondary">&copy; 2025 Company, Inc</p>
  </footer>
</div>
  </div>
    </>
  );
}

export default App
