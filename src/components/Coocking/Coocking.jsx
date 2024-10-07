const Coocking = ({ coock }) => {
  return (
    <div className="md:w-[40%] md:mr-3">
      <div className="container mx-auto px-3 lg:px-0">
        <div className="border  shadow-xl mt-20 md:mt-52 py-5 px-3">
          <div className="overflow-x-auto ">
            <h2 className="text-center font-bold text-2xl">
              Want to coock: {coock.length}
            </h2>
            <table className="table mt-5">
              <thead>
                <tr className="bg-base-200">
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {coock.map((recipe, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{recipe.name}</td>
                    <td>{recipe.time} min</td>
                    <td>{recipe.calories}</td>
                    <td>
                      <button className="btn btn-error">Preparing..</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto mt-10">
            <h2 className="text-center font-bold text-2xl">Want to coock: 0</h2>
            <table className="table mt-5">
              <thead>
                <tr className="bg-base-200">
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>Total time: 0 min</td>
                  <td colSpan={2}>Total calories: 0 calories</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coocking;
