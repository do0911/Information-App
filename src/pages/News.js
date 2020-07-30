import React, { Component } from "react";
import Newspage from "./Newspage";
import axios from "axios";
import { FormGroup, Input } from "reactstrap";
import LinearProgress from "@material-ui/core/LinearProgress";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      category: "general",
      data: [],
    };
  }

  componentDidMount() {
    this._getNews();
  }

  _getNews = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=${this.state.category}&apiKey=3bcd8f69870d493e845d3715ae1ad905`
      )
      .then((data) => {
        this.setState({
          data: data.data.articles,
          loading: true,
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      category: e.target.value,
      loading: false,
    });
    this._getNews();
  };

  render() {
    const { category, data, loading } = this.state;
    console.log(category);
    console.log(data);
    return (
      <div>
        <FormGroup>
          <Input
            type="select"
            name="select"
            value={category}
            onChange={this.handleChange}
          >
            <option value="general">All</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
          </Input>
        </FormGroup>
        {loading ? (
          data.map((data) => (
            <Newspage
              title={data.title}
              desc={data.description}
              url={data.url}
              image={data.urlToImage}
            />
          ))
        ) : (
          <LinearProgress />
        )}
      </div>
    );
  }
}

export default News;
