export default function InfiniteHorizontalScroll() {
  return (
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <img src="./images/Logo.png" alt="Facebook" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Disney" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Airbnb" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Apple" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Spark" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Samsung" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Quora" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Sass" />
        </li>
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <img src="./images/Logo.png" alt="Facebook" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Disney" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Airbnb" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Apple" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Spark" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Samsung" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Quora" />
        </li>
        <li>
          <img src="./images/Logo.png" alt="Sass" />
        </li>
      </ul>
    </div>
  );
}
