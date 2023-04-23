import { useState } from "react"
import Modal from "./UI/Overlay"

function App() {
  const [isShowSidebar, setShowSidebar] = useState(false)

  const showSidebar = () => {
    setShowSidebar(true)
  }

  const hideSidebar = () => {
    setShowSidebar(false)
  }

  return (
    <div className="ml-4">
      <div className="border-2 h-20">NavBar</div>
      <div className="border-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
          convallis convallis tellus id interdum velit laoreet id. Rhoncus est
          pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
          Ornare massa eget egestas purus viverra. Quisque egestas diam in arcu
          cursus euismod. Tortor id aliquet lectus proin nibh nisl condimentum.
          Scelerisque varius morbi enim nunc faucibus. At imperdiet dui accumsan
          sit amet. Imperdiet massa tincidunt nunc pulvinar sapien. Enim sit
          amet venenatis urna cursus eget nunc. Vitae tortor condimentum lacinia
          quis vel eros donec ac. Viverra aliquet eget sit amet tellus cras
          adipiscing enim eu. Vulputate eu scelerisque felis imperdiet proin.
          Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.
          Suspendisse faucibus interdum posuere lorem ipsum dolor. Sed risus
          ultricies tristique nulla aliquet enim tortor at auctor. Massa
          tincidunt dui ut ornare lectus sit.
        </p>
        <br />
        <p>
          Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Mollis
          aliquam ut porttitor leo a diam sollicitudin tempor id. Morbi blandit
          cursus risus at ultrices mi tempus imperdiet nulla. Vitae sapien
          pellentesque habitant morbi tristique senectus et netus. Aliquet
          bibendum enim facilisis gravida neque convallis a. Ornare arcu odio ut
          sem nulla. Magnis dis parturient montes nascetur ridiculus mus mauris.
          Dui faucibus in ornare quam viverra orci sagittis eu. Fermentum dui
          faucibus in ornare quam. Accumsan tortor posuere ac ut consequat. Quis
          viverra nibh cras pulvinar mattis nunc sed. Netus et malesuada fames
          ac turpis egestas. Vitae congue mauris rhoncus aenean vel elit
          scelerisque mauris. Sed arcu non odio euismod lacinia. Vitae auctor eu
          augue ut lectus arcu. Praesent elementum facilisis leo vel fringilla.
          Hac habitasse platea dictumst quisque sagittis purus sit amet
          volutpat. Magna sit amet purus gravida quis blandit turpis cursus in.
          Mauris augue neque gravida in fermentum et sollicitudin.
        </p>
        <br />
        <p>
          Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
          Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Tellus
          mauris a diam maecenas. Quisque egestas diam in arcu cursus euismod
          quis. Non tellus orci ac auctor augue mauris augue neque. Suscipit
          tellus mauris a diam maecenas sed enim ut. Arcu bibendum at varius
          vel. Accumsan lacus vel facilisis volutpat est velit egestas dui id.
          Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada.
          Eget arcu dictum varius duis at consectetur lorem donec massa. Eu
          feugiat pretium nibh ipsum consequat nisl vel pretium lectus.
        </p>
        <br />
        <p>
          Tincidunt ornare massa eget egestas purus viverra accumsan.
          Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Consequat
          nisl vel pretium lectus quam id leo. Integer quis auctor elit sed
          vulputate. Nibh cras pulvinar mattis nunc sed blandit libero volutpat
          sed. In hac habitasse platea dictumst vestibulum rhoncus est. Mi
          bibendum neque egestas congue. Pharetra et ultrices neque ornare
          aenean euismod elementum nisi. Dui faucibus in ornare quam viverra
          orci sagittis eu volutpat. Volutpat maecenas volutpat blandit aliquam
          etiam erat velit scelerisque. Bibendum ut tristique et egestas. Id leo
          in vitae turpis massa sed. Elit duis tristique sollicitudin nibh sit.
          Ut placerat orci nulla pellentesque dignissim enim sit. Imperdiet
          nulla malesuada pellentesque elit.
        </p>
        <br />
        <p>
          Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
          vitae. Leo integer malesuada nunc vel risus commodo viverra maecenas.
          Vel quam elementum pulvinar etiam. Semper quis lectus nulla at
          volutpat diam ut. Nunc consequat interdum varius sit amet mattis.
          Nulla porttitor massa id neque aliquam. Est velit egestas dui id
          ornare arcu. Adipiscing commodo elit at imperdiet dui accumsan.
          Scelerisque purus semper eget duis at tellus. Sed turpis tincidunt id
          aliquet risus. Consequat nisl vel pretium lectus quam id. Arcu
          bibendum at varius vel pharetra vel turpis. Lectus quam id leo in
          vitae turpis massa sed elementum. Arcu non sodales neque sodales ut
          etiam sit amet. Magnis dis parturient montes nascetur ridiculus mus
          mauris vitae ultricies. Cursus turpis massa tincidunt dui ut ornare.
          Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.
          Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Amet
          facilisis magna etiam tempor orci eu lobortis elementum.
        </p>
        <br />
        <p>
          Laoreet id donec ultrices tincidunt arcu. Sit amet purus gravida quis
          blandit. Arcu dui vivamus arcu felis bibendum ut. Vitae proin sagittis
          nisl rhoncus mattis rhoncus urna neque viverra. Non diam phasellus
          vestibulum lorem sed risus. Pharetra vel turpis nunc eget lorem.
          Ornare arcu dui vivamus arcu felis bibendum ut. Aliquet nec
          ullamcorper sit amet risus nullam eget felis. Enim eu turpis egestas
          pretium aenean pharetra magna. Amet consectetur adipiscing elit
          pellentesque habitant morbi. Dictum varius duis at consectetur lorem
          donec. Semper auctor neque vitae tempus quam pellentesque nec. At
          auctor urna nunc id cursus metus aliquam.
        </p>
        <br />
        <p>
          Nunc sed velit dignissim sodales ut eu sem integer vitae. Pellentesque
          sit amet porttitor eget dolor morbi. Nisl rhoncus mattis rhoncus urna
          neque viverra justo nec ultrices. Eu scelerisque felis imperdiet proin
          fermentum leo vel. Mattis pellentesque id nibh tortor id aliquet
          lectus proin nibh. Vel quam elementum pulvinar etiam non quam.
          Scelerisque varius morbi enim nunc faucibus. In est ante in nibh
          mauris cursus mattis. Sed vulputate mi sit amet mauris commodo quis.
          Duis convallis convallis tellus id interdum velit laoreet id donec.
          Maecenas pharetra convallis posuere morbi leo. Ac placerat vestibulum
          lectus mauris ultrices eros in cursus turpis. Eget gravida cum sociis
          natoque penatibus et magnis dis. Orci sagittis eu volutpat odio
          facilisis mauris sit amet massa. Non sodales neque sodales ut etiam.
        </p>
        <br />
        <p>
          Cras sed felis eget velit. Enim sit amet venenatis urna. Est
          ullamcorper eget nulla facilisi etiam dignissim diam. Enim nulla
          aliquet porttitor lacus. Dolor sed viverra ipsum nunc aliquet bibendum
          enim facilisis gravida. Auctor eu augue ut lectus arcu bibendum at
          varius vel. Quis eleifend quam adipiscing vitae. Ac feugiat sed lectus
          vestibulum. Lorem mollis aliquam ut porttitor leo a. Nulla malesuada
          pellentesque elit eget. Ac tincidunt vitae semper quis lectus. Turpis
          egestas pretium aenean pharetra magna. Interdum varius sit amet mattis
          vulputate. Gravida dictum fusce ut placerat orci nulla pellentesque.
          Volutpat odio facilisis mauris sit.
        </p>
        <br />
        <p>
          Tristique et egestas quis ipsum suspendisse ultrices. Et pharetra
          pharetra massa massa. Natoque penatibus et magnis dis. Ipsum dolor sit
          amet consectetur. Ipsum nunc aliquet bibendum enim facilisis gravida.
          Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Ut
          ornare lectus sit amet est placerat in egestas erat. Magna sit amet
          purus gravida. Varius vel pharetra vel turpis nunc eget lorem. Dolor
          sit amet consectetur adipiscing elit ut aliquam purus sit. Turpis
          egestas integer eget aliquet nibh. Integer enim neque volutpat ac
          tincidunt. Quis auctor elit sed vulputate mi sit amet. A cras semper
          auctor neque vitae tempus quam. Id venenatis a condimentum vitae
          sapien pellentesque habitant morbi tristique.
        </p>
        <br />
        <p>
          Accumsan lacus vel facilisis volutpat. Elementum nibh tellus molestie
          nunc non. Urna neque viverra justo nec ultrices. Massa tincidunt dui
          ut ornare lectus sit. Et egestas quis ipsum suspendisse ultrices.
          Senectus et netus et malesuada fames ac turpis egestas. Suspendisse
          faucibus interdum posuere lorem. Condimentum lacinia quis vel eros.
          Eget nullam non nisi est sit. Bibendum at varius vel pharetra vel
          turpis nunc. Vestibulum mattis ullamcorper velit sed ullamcorper morbi
          tincidunt. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien
          et. Placerat orci nulla pellentesque dignissim enim sit amet. Nunc
          faucibus a pellentesque sit amet. Id venenatis a condimentum vitae
          sapien pellentesque. Nunc consequat interdum varius sit. Auctor elit
          sed vulputate mi sit amet mauris commodo quis.
        </p>
        <br />
        <button
          className="border border-red-500 p-4 bg-red-200"
          onClick={showSidebar}
        >
          Open Sidebar
        </button>
      </div>
      {isShowSidebar && (
        <Modal onClose={hideSidebar}>
          <div className="w-max text-2xl">Sidebar</div>
          <button
            className="border border-red-500 p-4 bg-red-200"
            onClick={hideSidebar}
          >
            Close Sidebar
          </button>
        </Modal>
      )}
    </div>
  )
}

export default App
