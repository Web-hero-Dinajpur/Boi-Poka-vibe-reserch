
import BannarImg from '../../assets/books.jpg'
const TopBannar = () => {
    return (
        <div className="hero bg-base-200 min-h-screen px-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={BannarImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to fredhen up your bookshelf</h1>
                    <button className="btn btn-primary mt-8">View the list</button>
                </div>
            </div>
        </div>
    );
};

export default TopBannar;