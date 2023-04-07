import Carousel from "react-native-snap-carousel";
import ExpenseSliderItem from "./ExpenseSliderItem";

export default function ExpensesSlider() {
  const items = [{}, {}, {}];

  const renderItem = ({ item, index }: any) => {
    return <ExpenseSliderItem />;
  };

  return (
    <Carousel
      data={items}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={250}
      activeSlideAlignment='start'
    />
  );
}
