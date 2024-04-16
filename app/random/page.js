import ImageSlideshow from "@/components/images/images-slideshow";
import Random from "@/components/random";

function RandomPage() {
  return (
    <div>
      <Random component="h1">hello world!</Random>
      <Random component="span">hello world!</Random>
      <Random component="div">hello world!</Random>
      <Random component={ImageSlideshow}></Random>
      <Random>Yes</Random>
    </div>
  );
}

export default RandomPage;
