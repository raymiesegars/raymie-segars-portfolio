"use client";

import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>Prism Demo</H1>
      <hr className="border-muted" />
      
      {/* YouTube Video Embed */}
      <section className="space-y-3">
        <H2>Demo Video</H2>
        <div className="relative w-full overflow-hidden rounded-lg border bg-muted/50 shadow-sm" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src="https://www.youtube.com/embed/b-HUiK8Z2bc"
            title="prismdemo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <hr className="border-muted" />
      
      <section className="flex flex-col space-y-3">
        <H2>About The Site</H2>
        <p className="leading-7">
          Prism Demo is an innovative 3D web and VR application that bridges the
          gap between traditional web browsing and immersive virtual reality
          experiences. Built collaboratively at Aktiga, this application allows
          users to view and interact with 3D models in both standard web browsers
          and VR headsets, providing a seamless transition between viewing modes.
        </p>
        <p className="leading-7">
          The application enables users to explore detailed 3D environments and
          models at true scale, whether they&apos;re using a desktop computer, mobile
          device, or VR headset. With custom-built VR controls and movement
          systems, users can navigate virtual spaces naturally, walking around and
          teleporting to examine models from different angles and perspectives.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Key Features</H2>
        <ul className="list-inside list-disc space-y-1 pl-4 leading-7">
          <li>
            <strong>Dual-Mode Viewing:</strong> Seamlessly toggle between browser
            and VR headset viewing modes, allowing users to switch between
            platforms without losing their place or context.
          </li>
          <li>
            <strong>VR Navigation:</strong> Fully custom-built VR controls and
            movement system that enables natural navigation through 3D spaces,
            including walking and teleportation mechanics.
          </li>
          <li>
            <strong>True-Scale Viewing:</strong> View 3D models at their actual
            scale, providing an accurate representation of size and proportions
            that&apos;s particularly valuable for architectural, product design, and
            educational applications.
          </li>
          <li>
            <strong>Multiple Model Support:</strong> Display and manage multiple 3D
            models within a single environment, enabling comparative viewing and
            complex scene composition.
          </li>
          <li>
            <strong>Dynamic Material System:</strong> Toggleable meshes that allow
            users to change materials and colors on models, providing flexibility
            in visualization and design exploration.
          </li>
          <li>
            <strong>Cross-Platform Compatibility:</strong> Works seamlessly on
            desktop browsers, mobile devices, and VR headsets, ensuring accessibility
            across different hardware configurations.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>My Contributions</H2>
        <p className="leading-7">
          Working alongside a co-worker at Aktiga, I contributed significantly
          to the development of Prism Demo. The project involved building a complex
          3D application that required deep understanding of WebGL, Three.js, and
          VR development principles.
        </p>
        <p className="leading-7">
          Key areas of development included implementing the VR control system,
          creating the material toggle functionality, and ensuring smooth
          transitions between browser and VR viewing modes. The application
          demonstrates advanced 3D web development techniques and showcases the
          potential of web-based VR experiences.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technological Foundation</H2>
        <p className="leading-7">
          Prism Demo is built on a powerful 3D web technology stack, leveraging
          Next.js and React for the application framework. The core 3D rendering
          is powered by Three.js, one of the most popular JavaScript libraries
          for creating 3D graphics in web browsers.
        </p>
        <p className="leading-7">
          React Three Fiber provides a React renderer for Three.js, enabling a
          component-based approach to 3D scene construction. This allows for more
          maintainable code and easier integration with React&apos;s state management
          and lifecycle systems.
        </p>
        <p className="leading-7">
          The VR functionality is implemented using WebXR APIs, which enable
          immersive experiences directly in web browsers without requiring
          additional plugins or applications. This approach makes VR accessible to
          a wider audience and simplifies the deployment process.
        </p>
        <p className="leading-7">
          The custom VR controls and movement systems were built from scratch,
          providing precise control over user interactions and ensuring a smooth,
          natural feel when navigating virtual environments. The material toggle
          system allows for dynamic visualization changes, enabling users to
          explore different design options and configurations in real-time.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Use Cases</H2>
        <p className="leading-7">
          Prism Demo serves various use cases across different industries:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-4 leading-7">
          <li>
            <strong>Architecture & Design:</strong> Architects and designers can
            present 3D models to clients, allowing them to explore spaces at true
            scale before construction begins.
          </li>
          <li>
            <strong>Product Visualization:</strong> Manufacturers can showcase
            products in immersive environments, enabling customers to examine
            details and configurations in detail.
          </li>
          <li>
            <strong>Education:</strong> Educational institutions can create
            interactive 3D learning experiences that help students understand
            complex spatial relationships and concepts.
          </li>
          <li>
            <strong>Virtual Showrooms:</strong> Businesses can create virtual
            showrooms that customers can explore from anywhere, reducing the need
            for physical locations.
          </li>
        </ul>
      </section>
    </section>
  );
}
