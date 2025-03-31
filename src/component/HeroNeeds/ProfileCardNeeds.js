export default function ProfileCardNeeds({ name }) {
  const needs = ["web development", "Machine learning"];
  return (
    <>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
            alt={name}
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900">{name}</h5>
          <span className="font-light">Needs</span>
          <div className="text-sm flex justify-evenly flex-wrap gap-2 p-2">
            {needs.map((need, i) => (
              <span
                key={i}
                className="bg-pink-600 text-white px-3 py-1 rounded-lg shadow-md font-semibold"
              >
                {need}
              </span>
            ))}
          </div>
          <div class="flex mt-4 md:mt-6">
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm 
              font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Connect
            </a>
            <a
              href="#"
              class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 
              hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
