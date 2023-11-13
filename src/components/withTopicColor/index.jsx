import _ from "lodash";
import topicColors from "../../helpers/topicColors";

const WithTopicColor = ({ render, topic }) => {
  const color = `#${_.get(topicColors, topic)}`;
  return render(color);
};

export default WithTopicColor;