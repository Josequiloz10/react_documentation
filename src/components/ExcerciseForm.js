import React from 'react'


const ExcercisesForm = ({onChange, onSubmit, form}) => (
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    onChange={onChange}
                    value={form.title}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    onChange={onChange}
                    value={form.description}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Img"
                    name="img"
                    onChange={onChange}
                    value={form.img}
                />
            </div>
            <div className="form-row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="LeftColor"
                        name="leftColor"
                        onChange={onChange}
                        value={form.leftColor}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="RightColor"
                        name="rightColor"
                        onChange={onChange}
                        value={form.rightColor}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    </div>

)

export default ExcercisesForm