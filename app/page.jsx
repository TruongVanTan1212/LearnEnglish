import Image from "next/image";  
import Link from "next/link";
export default function Home() {
  return (
    <>
        {/*<!-- Hero -->*/}
        <section className="flex flex-col md:flex-row items-center px-8 py-16 md:py-24">
            <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Learn English 1-on-1 <br /> with your best-fit teacher
            </h1>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Sign up for a free trial
            </button>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Video/Image</span>
            </div>
            </div>
        </section>

        {/*<!-- Why choose us -->*/}
        <section className="px-8 py-16 bg-white">
            <h2 className="text-2xl font-bold text-center mb-10">Why choose us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Personalized teacher</h3>
                <p className="text-gray-600 text-sm mt-2">Find the perfect match for your goals</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Free trial</h3>
                <p className="text-gray-600 text-sm mt-2">Start with a free className before committing</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Flexible scheduling</h3>
                <p className="text-gray-600 text-sm mt-2">Book classes at times that suit you</p>
            </div>
            </div>
        </section>
        {/*top teacher*/}
        <section className="px-8 py-16">
            <h2 className="text-2xl font-bold text-center mb-10 ">Featured teachers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white shadow rounded-lg p-6 text-center 
                                transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Name</h3>
                <p className="text-sm text-gray-500">Tổng số buổi dạy</p>
                <div className="flex justify-center text-yellow-500 mt-2">★★★★★</div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Học thử miễn phí
                </button>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Name</h3>
                <p className="text-sm text-gray-500">Country</p>
                <div className="flex justify-center text-yellow-500 mt-2">★★★★★</div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Book trial
                </button>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Name</h3>
                <p className="text-sm text-gray-500">Country</p>
                <div className="flex justify-center text-yellow-500 mt-2">★★★★★</div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Book trial
                </button>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Name</h3>
                <p className="text-sm text-gray-500">Country</p>
                <div className="flex justify-center text-yellow-500 mt-2">★★★★★</div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Book trial
                </button>
              </div>
               <div className="bg-white shadow rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Name</h3>
                <p className="text-sm text-gray-500">Country</p>
                <div className="flex justify-center text-yellow-500 mt-2">★★★★★</div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Book trial
                </button>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Name</h3>
                <p className="text-sm text-gray-500">Country</p>
                <div className="flex justify-center text-yellow-500 mt-2">★★★★★</div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Book trial
                </button>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Name</h3>
                <p className="text-sm text-gray-500">Country</p>
                <div className="flex justify-center text-yellow-500 mt-2">★★★★★</div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Book trial
                </button>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Name</h3>
                <p className="text-sm text-gray-500">Country</p>
                <div className="flex justify-center text-yellow-500 mt-2">★★★★★</div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Book trial
                </button>
              </div>
            </div>
          </section>

          {/*<!-- 1) HOW IT WORKS -->*/}
    <section id="how-it-works" aria-labelledby="how-title" className="px-8 py-16">
      <div className="text-center">
        <h2 id="how-title" className="text-3xl sm:text-4xl font-bold tracking-tight">How it works</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">4 simple steps to start learning English 1‑on‑1 with your best‑fit teacher.</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
        {/* <!-- Step 1 --> */}
        <div className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
            {/* <!-- User icon --> */}
             <div
                className="flex h-12 w-12 items-center justify-center rounded-full
                 text-indigo-600 font-bold text-lg">
                1
            </div>
          </div>
          <h3 className="mt-5 text-lg font-semibold">Sign up</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Create a free account to personalize your learning goals.</p>
        </div>

        {/*<!-- Step 2 -->*/}
        <div className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
            {/* <!-- Cap icon --> */}
            <div
                className="flex h-12 w-12 items-center justify-center rounded-full
                 text-indigo-600 font-bold text-lg">
                2
            </div>
          </div>
          <h3 className="mt-5 text-lg font-semibold">Choose a teacher</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Match by timezone, specialty (IELTS/TOEIC/Business), and rating.</p>
        </div>

        {/* <!-- Step 3 --> */}
        <div className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
            {/* <!-- Calendar icon --> */}
            <div
                className="flex h-12 w-12 items-center justify-center rounded-full
                 text-indigo-600 font-bold text-lg">
                3
            </div>
          </div>
          <h3 className="mt-5 text-lg font-semibold">Book a lesson</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Pick the date/time that fits your schedule—reschedule anytime.</p>
        </div>

        {/* <!-- Step 4 --> */}
        <div className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
            {/* <!-- Play icon --> */}
            <div
                className="flex h-12 w-12 items-center justify-center rounded-full
                 text-indigo-600 font-bold text-lg">
                4
            </div>
          </div>
          <h3 className="mt-5 text-lg font-semibold">Start learning</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Join your live 1‑on‑1 video call and track progress after each lesson.</p>
        </div>
        {/* <!-- Step 5 --> */}
        <div className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
            {/* <!-- Play icon --> */}
            <div
                className="flex h-12 w-12 items-center justify-center rounded-full
                 text-indigo-600 font-bold text-lg">
                5
            </div>
          </div>
          <h3 className="mt-5 text-lg font-semibold">Start learning</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Join your live 1‑on‑1 video call and track progress after each lesson.</p>
        </div>
      </div>
      <div className=" flex justify-center items-center px-4 py-8 ">  
            <button className=" bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700
                                  transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
                Sign up for a free trial
            </button>
      </div>
    </section>
       

    {/* <!-- 3) TESTIMONIALS / SUCCESS STORIES --> */}
    <section id="testimonials" aria-labelledby="testimonials-title" className="scroll-mt-24 px-8 py-16">
      <div className="text-center">
        <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-bold tracking-tight">More testimonials</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Real results from learners like you.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* <!-- Card --> */}
        <figure className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/80?img=12" alt="John Nguyen avatar" className="h-12 w-12 rounded-full object-cover"/>
            <figcaption className="font-semibold">John Nguyen • IELTS 7.0</figcaption>
          </div>
          <blockquote className="mt-4 text-slate-700">“Sau 3 tháng mình tăng từ 5.5 lên 7.0. Thầy sửa phát âm rất kỹ và có lộ trình rõ ràng.”</blockquote>
        </figure>

        <figure className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/80?img=32" alt="Lan Pham avatar" className="h-12 w-12 rounded-full object-cover"/>
            <figcaption className="font-semibold">Lan Pham • TOEIC 860</figcaption>
          </div>
          <blockquote className="mt-4 text-slate-700">“Từ vốn 550 TOEIC, mình đạt 860 sau 2 tháng luyện nghe – đọc 1 kèm 1.”</blockquote>
        </figure>

        <figure className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/80?img=5" alt="Minh Tran avatar" className="h-12 w-12 rounded-full object-cover"/>
            <figcaption className="font-semibold">Minh Tran • Giao tiếp công việc</figcaption>
          </div>
          <blockquote className="mt-4 text-slate-700">“Mình đã tự tin trình bày bằng tiếng Anh trong các cuộc họp với khách hàng quốc tế.”</blockquote>
        </figure>
      </div>
    </section>


{/* <!-- SECTION: KHÁCH HÀNG VÀ ĐỐI TÁC --> */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold tracking-wide">
            KHÁCH HÀNG VÀ ĐỐI TÁC
          </h2>

          {/* <!-- GRID LOGO --> */}
          <div className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {/* <!-- Card logo --> */}
            
              <Image src='/images/anh1.png' alt="MESAroup" className="mx-auto max-h-12 object-contain " width={200} height={80} />
            
              <Image src='/images/anh2.png' alt="ALife" className="mx-auto max-h-12 object-contain " width={200} height={80}  />

              <Image src='/images/anh3.png' alt="Acrylic'Sai Gon" className="mx-auto max-h-12 object-contain" width={200} height={80}  />

              <Image src='/images/anh4.png' alt="DIPRO" className="mx-auto max-h-12 object-contain"  width={200} height={80}  />

              <Image src='/images/anh5.png' alt="TPBank" className="mx-auto max-h-12 object-contain " width={200} height={80}  />

              <Image src='/images/anh6.png' alt="NI" className="mx-auto max-h-12 object-contain " width={200} height={80}  />

              <Image src='/images/anh7.png' alt="Manulife" className="mx-auto max-h-12 object-contain " width={200} height={80}  />

              <Image src='/images/anh8.png' alt="Techcombank" className="mx-auto max-h-12 object-contain " width={200} height={80}  />

              <Image src='/images/anh9.png' alt="Kim Lng Phat" className="mx-auto max-h-12 object-contain " width={200} height={80}  />

              <Image src='/images/anh10.png' alt="BIDV" className="mx-auto max-h-12 object-contain " width={200} height={80}  />

              <Image src='/images/anh11.png' alt="HDBank" className="mx-auto max-h-12 object-contain " width={200} height={80}  /> 

              <Image src='/images/anh12.png' alt="SGS" className="mx-auto max-h-12 object-contain " width={200} height={80}  />
            
          </div>

          {/* <!-- CTA Đăng ký --> */}
          <div className="mt-10 flex justify-center">
            <Link href="/login" className="inline-flex items-center rounded-xl bg-rose-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
                ĐĂNG KÝ NHẬN TƯ VẤN
            </Link>
          </div>
        </div>
      </section>
    {/* <!-- 4) FAQ --> */}
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 px-8 py-16">
      <div className="text-center">
        <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold tracking-tight">FAQ</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Everything you need to know.</p>
      </div>

      <div className="mt-10 mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm max-w-6xl mx-auto">
        {/* <!-- Item 1 --> */}
        <div className="p-6">
          <button type="button" className="faq-toggle flex w-full items-center justify-between text-left" aria-expanded="false" aria-controls="faq-panel-1">
            <span className="text-base sm:text-lg font-semibold">Nếu không hài lòng với giáo viên thì sao?</span>
            <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
          </button>
          <div id="faq-panel-1" className="mt-3 hidden text-slate-600">Bạn có thể đổi giáo viên bất cứ lúc nào. Chúng tôi hoàn tiền buổi học chưa dùng theo chính sách hiện hành.</div>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="p-6">
          <button type="button" className="faq-toggle flex w-full items-center justify-between text-left" aria-expanded="false" aria-controls="faq-panel-2">
            <span className="text-base sm:text-lg font-semibold">Tôi có thể thay đổi lịch học không?</span>
            <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
          </button>
          <div id="faq-panel-2" className="mt-3 hidden text-slate-600">Có. Bạn có thể dời lịch miễn phí trước 24 giờ. Hủy sát giờ có thể phát sinh phí.</div>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="p-6">
          <button type="button" className="faq-toggle flex w-full items-center justify-between text-left" aria-expanded="false" aria-controls="faq-panel-3">
            <span className="text-base sm:text-lg font-semibold">Thanh toán có an toàn không?</span>
            <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
          </button>
          <div id="faq-panel-3" className="mt-3 hidden text-slate-600">Chúng tôi sử dụng cổng thanh toán đạt chuẩn PCI‑DSS, mã hóa dữ liệu và không lưu trữ thông tin thẻ của bạn.</div>
        </div>
      </div>
    </section>
    </> 
  );
}
