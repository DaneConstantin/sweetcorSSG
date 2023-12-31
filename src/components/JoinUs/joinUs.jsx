import BookAMeeting from "../ActionButton.jsx";
import styles from "./join.module.css";


const Join = () => {
    return (
        <section className="py-12 lg:py-24 text-center mx-auto">
            <div className="flex flex-col w-full max-w-[420px] items-center px-4">
                <h1 className={styles.h1}>Join our team to be a part of our story</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <BookAMeeting title="Join Now" link={`/register`} />
            </div>


        </section>
    );
}


export default Join;