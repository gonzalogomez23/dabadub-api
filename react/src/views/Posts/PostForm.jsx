import { useEffect, useState, useRef } from "react";
import axiosClient from "../../axios-client";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "components/PrimaryButton";
import { useStateContext } from "contexts/ContextProvider";

const PostForm = () => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const contentRef = useRef();
  const publishedRef = useRef();

  const [errors, setErrors] = useState(null);
  const {setNotification} = useStateContext()
  const [loading, setLoading] = useState(false);

  const [post, setPost] = useState({
    title: "",
    description: "",
    content: "",
    published: true,
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      content: contentRef.current.value,
      published: publishedRef.current.checked,
    };

    setErrors(null);
    setLoading(true);
    console.log(payload)

    axiosClient.post("/posts", payload)
      .then(() => {
        setNotification("Post was successfully created")
        navigate("/posts");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors || { general: [response.data.message] });
        } else {
          console.error("Unexpected error:", response.data.error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="w-[650px] max-w-full px-2 py-4">
        <h1 className="text-4xl text-primary font-semibold font-headings px-1 mb-5">
          Create new post
        </h1>
        <div className="card animated fadeInDown">
          {loading && <div className="text-center">Loading...</div>}
          {!loading && (
            <form
              className="max-w-full flex flex-col items-start gap-5"
              onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="title">Title</label>
                    <input
                    id="title"
                    name="title"
                    ref={titleRef}
                    placeholder="Title"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-primary"
                    />
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="description">Description</label>
                    <textarea
                    id="description"
                    name="description"
                    ref={descriptionRef}
                    placeholder="Description"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-primary"
                    />
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="content">Content</label>
                    <textarea
                    id="content"
                    name="content"
                    ref={contentRef}
                    placeholder="Content"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-primary"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <input
                        id="published"
                        name="published"
                        type="checkbox"
                        ref={publishedRef}
                        defaultChecked={true}
                    />
                    <label htmlFor="published">Published</label>
                </div>

                {errors && (
                    <div className="text-red-700">
                    {Object.keys(errors).map((key) => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                    </div>
                )}

                <PrimaryButton className="btn-add" type="submit">
                    Create
                </PrimaryButton>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostForm;
