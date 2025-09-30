
import scenery1 from '../shared folder/images folder/scene 1.jpg'
import myImages from '../shared folder/constant folder/constantData.js'
const MyImagesComp = () => {
    return (
        <div>
            <h2>My Image</h2>
            <img src={scenery1} alt="scenery" height="200px" width="300px"/>
            <hr/>
            <img src={myImages.scene2} alt="scenery" height="200px" width="300px"/>
            <img src={myImages.scene3} alt="scenery" height="200px" width="300px"/>
            <img src={myImages.scene4} alt="scenery" height="200px" width="300px"/>
            <img src={myImages.scene5} alt="scenery" height="200px" width="300px"/>
        </div>
    )
}

export default MyImagesComp
