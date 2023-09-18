const stats = [
    { id: 1, name: 'Pelanggan Aktif', value: '4 Juta++' },
    { id: 2, name: 'Cabang Pemasaran', value: '340++' },
    { id: 3, name: 'Bibit Terjual', value: '40 Juta++' },
  ]
  
  export default function IndexStat() {
    return (
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-green-500">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-green-500 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  